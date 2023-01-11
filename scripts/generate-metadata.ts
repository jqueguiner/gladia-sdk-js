import fs from 'fs';
import packageJson from '../package.json';
import { openApiJson } from '../src/meta/openapidef';
import { OpenApiJson, PathDef } from '../src/meta/openapideftype';
import { EndpointDef, EndpointDefParam } from '../src/meta/endpoint-defs-type';
import { exit } from 'process';
import { getOpenapiJson } from './openapi.utils';

async function main() {
  try {
    await generateOpenApiDefTs();
    generateSdkVersionTs();
    generateEndpointDefs();
  } catch (err) {
    console.error(err);
    exit(-1);
  }
}

const ARG_FROM_FILE_PREFIX = '--from-file=';

async function generateOpenApiDefTs() {
  const fromFile = process.argv
    .filter((arg) => arg.startsWith(ARG_FROM_FILE_PREFIX))
    .map((arg) => arg.substring(ARG_FROM_FILE_PREFIX.length))
    .find(() => true); // extract first element
  let openApiJson: string;
  if (fromFile) {
    openApiJson = fs.readFileSync(fromFile, { encoding: 'utf-8' });
  } else {
    openApiJson = await getOpenapiJson();
  }
  const openApiJsonObj = JSON.parse(openApiJson);
  const jsonLines = JSON.stringify(openApiJsonObj, undefined, 2).split('\n');
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(`import { OpenApiJson } from './openapideftype';`);
  fileContent.push('');
  fileContent.push(`export const openApiJson: OpenApiJson = ${jsonLines.shift()}`);
  jsonLines.forEach((l) => fileContent.push(l));
  fileContent.push(fileContent.pop() + ';');
  fs.writeFileSync('./src/meta/openapidef.ts', fileContent.join('\n'));
}

function generateSdkVersionTs() {
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(`export const SDK_VERSION = '${packageJson.version}';`);
  fs.writeFileSync('./src/meta/sdk-version.ts', fileContent.join('\n'));
}

function getGeneratedMarks(): string[] {
  return ['/* Generated file with "scripts/generate-metasdk.ts" */', ''];
}

export function generateEndpointDefs() {
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(`import { EndpointDef } from "./endpoint-defs-type";`);
  fileContent.push('');
  const endpointDefs: EndpointDef[] = Object.entries(openApiJson.paths)
    .filter(([path]) => !path.startsWith('/automl/'))
    .map(([path, def]) => {
      console.debug('Found endpoint', path);
      const [, inputType, outputType, taskName] = path.split('/');
      const params = getPostParams(def, openApiJson);
      return {
        url: path,
        inputType,
        outputType,
        taskName,
        ...getPostModels(def),
        ...getInputBodyContentType(inputType),
        ...getOutputBodyContentType(def),
        params,
        hasSamplesParam: params.some((param) => param.name === 'samples'),
      };
    });
  console.debug('found', endpointDefs.length, 'endpoints');
  endpointDefs.sort((a, b) => a.url.localeCompare(b.url));
  const jsonLines = JSON.stringify(endpointDefs, undefined, 2).split('\n');

  fileContent.push(`export const ENDPOINT_DEFS: EndpointDef[] = ${jsonLines.shift()}`);
  jsonLines.forEach((l) => fileContent.push(l));
  fileContent.push(fileContent.pop() + ';');
  fs.writeFileSync('./src/meta/endpoint-defs.ts', fileContent.join('\n'));
}

function getPostModels(def: PathDef): Pick<EndpointDef, 'models' | 'defaultModel'> {
  const modelsParam = def.post.parameters?.filter((p) => p.name === 'model')[0];
  if (!modelsParam) {
    throw { kind: 'InvalidParamModel', def };
  }
  if (modelsParam.schema.type === 'integer') {
    throw { kind: 'InvalidSchema', def };
  }
  const models = [...new Set(modelsParam.schema.enum ?? [])];
  models.sort();
  return { models, defaultModel: modelsParam.schema.default };
}

function getInputBodyContentType(inputType: string): Pick<EndpointDef, 'inputBodyContentType'> {
  switch (inputType) {
    case 'text':
      return { inputBodyContentType: 'application/x-www-form-urlencoded' };
    case 'audio':
    case 'image':
    case 'video':
      return { inputBodyContentType: 'multipart/form-data' };
    default:
      throw { kind: 'InvalidInputType', inputType };
  }
}

function getOutputBodyContentType(def: PathDef): Pick<EndpointDef, 'outputBodyContentType'> {
  if (200 in def.post.responses) {
    const okResponse = def.post.responses[200];
    if ('application/json' in okResponse.content) {
      const jsonContent = okResponse.content['application/json'];
      if ('prediction' in jsonContent.schema && 'prediction_raw' in jsonContent.schema) {
        return {
          outputBodyContentType: {
            type: 'prediction-standard-output',
            predictionType:
              jsonContent.schema.prediction === 'str' || jsonContent.schema.prediction === 'text'
                ? 'string'
                : jsonContent.schema.prediction,
          },
        };
      } else if (Object.keys(jsonContent.schema).length === 0) {
        return { outputBodyContentType: { type: 'unknown' } };
      }
    } else if ('image/*' in okResponse.content) {
      return { outputBodyContentType: { type: 'binary' } };
    }
  }
  throw { kind: 'InvalidOutputDefinition', def: JSON.stringify(def.post, undefined, 2) };
}

function getPostParams(def: PathDef, openApiJson: OpenApiJson) {
  const defParams = def.post.parameters?.filter((p) => p.name !== 'model') ?? [];
  const params: EndpointDefParam[] = defParams.map(
    (p): EndpointDefParam => ({
      in: 'query',
      type: p.schema.type,
      name: p.name,
      example: undefined,
      required: p.required,
    }),
  );

  if (def.post.requestBody) {
    Object.values(def.post.requestBody.content).forEach((schema) => {
      const componentRef = schema.schema.$ref;
      if (!componentRef) {
        return;
      }
      const component =
        openApiJson.components.schemas[componentRef.substring('#/components/schemas/'.length)];
      if (component.properties) {
        params.push(
          ...Object.entries(component.properties).map(
            ([propName, propSchema]): EndpointDefParam => {
              const isRequired = component.required?.includes(propName) ?? false;
              const example = propSchema.example;
              const type: EndpointDefParam['type'] = (() => {
                switch (propSchema.data_type) {
                  case 'integer':
                  case 'int':
                    return 'integer';
                  case 'float':
                    return 'float';
                  case 'url':
                    return 'url';
                  case 'audio':
                    return 'audio';
                  case 'image':
                    return 'image';
                  case 'video':
                    return 'video';
                  case 'array':
                    return 'array';
                  case 'list':
                  case 'enum':
                    return 'enum';
                  case 'text':
                  case 'string':
                  case 'str':
                  default:
                    return 'string';
                }
              })();
              if (type === 'enum') {
                if (!('allOf' in propSchema)) {
                  throw new Error('Property allOf missing with data_type "enum"');
                }
                const ref = propSchema.allOf![0].$ref;
                const dynamicEnum =
                  openApiJson.components.schemas[ref.substring('#/components/schemas/'.length)];
                const enumValues = dynamicEnum.enum;
                if (!enumValues || enumValues.length === 0) {
                  throw new Error(
                    `"${ref}" should have property enum that contains enum values for the property "${propName}"`,
                  );
                }
                return {
                  in: 'formData',
                  type,
                  name: propName,
                  example,
                  required: isRequired,
                  enumValues,
                };
              } else {
                return { in: 'formData', type, name: propName, example, required: isRequired };
              }
            },
          ),
        );
      }
    });
  }
  return params;
}

(async () => {
  await main();
})();

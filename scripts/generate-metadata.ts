import fs from 'fs';
import { create } from 'mutative';
import packageJson from '../package.json';
import { OpenApiJson, PathDef } from '../src/meta/openapideftype';
import { EndpointDef, EndpointDefParam } from '../src/meta/endpoint-defs-type';
import { exit } from 'process';
import { getOpenapiJson } from './openapi.utils';
import { isDefined, isNotDefined } from '../src/utils/fp';
import { getMethodName } from '../src/meta/get-method-name';

async function main() {
  try {
    const openApiJson = await generateOpenApiDefTs();
    generateSdkVersionTs();
    const endpointDefs = generateEndpointDefs(openApiJson);
    generateTaskNamesTs(endpointDefs);
    generateMappingsTs(endpointDefs);
  } catch (err) {
    console.error(err);
    exit(-1);
  }
}

const ARG_FROM_FILE_PREFIX = '--from-file=';

async function generateOpenApiDefTs(): Promise<OpenApiJson> {
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
  const openApiJsonObj: OpenApiJson = JSON.parse(openApiJson);
  const jsonLines = JSON.stringify(openApiJsonObj, undefined, 2).split('\n');
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(`import { OpenApiJson } from './openapideftype';`);
  fileContent.push('');
  fileContent.push(`export const openApiJson: OpenApiJson = ${jsonLines.shift()}`);
  jsonLines.forEach((l) => fileContent.push(l));
  fileContent.push(fileContent.pop() + ';');
  fs.writeFileSync('./src/meta/openapidef.ts', fileContent.join('\n'));
  return openApiJsonObj;
}

function generateSdkVersionTs() {
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(`export const SDK_VERSION = '${packageJson.version}';`);
  fs.writeFileSync('./src/meta/sdk-version.ts', fileContent.join('\n'));
}

function getGeneratedMarks(): string[] {
  return ['/* Generated file with "scripts/generate-metasdk.ts" */', ''];
}

function generateEndpointDefs(openApiJson: OpenApiJson) {
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push(`import { EndpointDef } from "./endpoint-defs-type";`);
  fileContent.push('');
  const endpointDefs: EndpointDef[] = Object.entries(openApiJson.paths)
    .filter(
      ([path]) => !path.startsWith('/automl/') && path !== '/ready' && !path.includes('cluster'),
    )
    .map(([path, def]) => {
      console.debug('Found endpoint', path);
      const [, inputType, outputType, taskName] = path.split('/');
      const params = getPostParams(def, openApiJson);
      return {
        url: path,
        inputType,
        outputType,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        taskName: taskName as any,
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
  return endpointDefs;
}

function generateTaskNamesTs(endpointDefs: EndpointDef[]) {
  const fileContent: string[] = [...getGeneratedMarks()];
  const endpoints = create(endpointDefs, (draft) => {
    draft.sort((a, b) => a.taskName.localeCompare(b.taskName));
  });
  fileContent.push('export const TASK_NAMES = [');
  for (const endpoint of endpoints) {
    const endpointName = endpoint.taskName;
    fileContent.push(`  '${endpointName}',`);
  }
  fileContent.push('] as const;');
  fileContent.push('');
  fileContent.push('export type TaskName = typeof TASK_NAMES[number];');
  fileContent.push('');

  fs.writeFileSync('./src/meta/task-names.ts', fileContent.join('\n'));
}

function generateMappingsTs(endpointDefs: EndpointDef[]) {
  const fileContent: string[] = [...getGeneratedMarks()];
  fileContent.push("import { TaskName } from './task-names';");
  fileContent.push('');
  const endpoints = create(endpointDefs, (draft) => {
    draft.sort((a, b) => a.taskName.localeCompare(b.taskName));
  });
  fileContent.push('export const TASK_NAME_TO_METHOD_NAME = {');
  for (const endpoint of endpoints) {
    const endpointName = endpoint.taskName;
    const methodName = getMethodName(endpoint);
    fileContent.push(`  '${endpointName}': '${methodName}',`);
  }
  fileContent.push('} as const;');
  fileContent.push('');
  fileContent.push('export type MethodName = typeof TASK_NAME_TO_METHOD_NAME[TaskName];');
  fileContent.push('');
  fs.writeFileSync('./src/meta/mappings.ts', fileContent.join('\n'));
}

function getPostModels(def: PathDef): Pick<EndpointDef, 'models' | 'defaultModel'> {
  assertValidDef(def);
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
  assertValidDef(def);
  if ('200' in def.post.responses) {
    const okResponse = def.post.responses['200'];
    if ('application/json' in okResponse.content) {
      const jsonContent = okResponse.content['application/json'];
      if (
        'properties' in jsonContent.schema &&
        'prediction' in jsonContent.schema.properties &&
        'prediction_raw' in jsonContent.schema.properties
      ) {
        return {
          outputBodyContentType: {
            type: 'prediction-standard-output',
            predictionType: (() => {
              const prediction = jsonContent.schema.properties.prediction;
              if (['str', 'text', 'string'].includes(prediction.type)) return 'string';
              else if (prediction.type === 'number') return 'number';
              else if (prediction.type === 'array') {
                if (
                  prediction.items.type === 'str' ||
                  prediction.items.type === 'text' ||
                  prediction.items.type === 'string'
                ) {
                  return { array: 'string' };
                } else if (prediction.items.type === 'array') throw new Error("Can't nest arrays");
                else return { array: prediction.items.type };
              } else {
                throw new Error("Can't define predictionType");
              }
            })(),
          },
        };
      } else if ('prediction' in jsonContent.schema && 'prediction_raw' in jsonContent.schema) {
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
  assertValidDef(def);
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
                  case 'bool':
                  case 'boolean':
                    return 'boolean';
                  case 'text':
                  case 'string':
                  case 'str':
                  default:
                    return 'string';
                }
              })();
              if (type === 'enum') {
                if (!('allOf' in propSchema) && !('enum' in propSchema)) {
                  throw new Error('Property allOf/enum missing with data_type "enum"');
                }
                assertAnyDefined(
                  ['propSchema.allOf', 'propSchema.enum'],
                  [propSchema.allOf, propSchema.enum],
                );
                const dynamicEnum = (() => {
                  if (!isNotDefined(propSchema.allOf)) {
                    const ref = propSchema.allOf[0].$ref;
                    return openApiJson.components.schemas[
                      ref.substring('#/components/schemas/'.length)
                    ];
                  } else {
                    return propSchema;
                  }
                })();

                const enumValues = dynamicEnum.enum;
                if (!enumValues || enumValues.length === 0) {
                  throw new Error(
                    `"${enumValues} should have property enum that contains enum values for the property "${propName}"`,
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

function assertValidDef(
  def: PathDef,
): asserts def is Omit<PathDef, 'post'> & Pick<Required<PathDef>, 'post'> {
  if (isNotDefined(def) || isNotDefined(def.post)) {
    throw new Error('Cannot handle undefined def');
  }
  if (isNotDefined(def) || isNotDefined(def.post)) {
    throw new Error('Cannot handle undefined def.post');
  }
}

function assertAnyDefined<T>(names: string[], values: (T | undefined)[]): asserts values is T[] {
  const definedValues = values.filter(isDefined) as T[];
  if (definedValues.length === 0) {
    throw new Error('At least one value should be defined in: ' + names.join(', '));
  }
}

(async () => {
  await main();
})();

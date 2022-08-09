import { openApiJson } from './openapidef';
import { OpenApiJson, PathDef } from './openapideftype';

export function getEndpoints(): EndpointDef[] {
  return Object.entries(openApiJson.paths).map(([path, def]) => {
    const [, inputType, outputType, taskName] = path.split('/');
    return {
      url: path,
      inputType,
      outputType,
      taskName,
      ...getPostModels(def),
      params: getPostParams(def, openApiJson),
    };
  });
}

type InputType = string;
type OutputType = string;
export function getEndpointsByInputOutput(): Record<InputType, Record<OutputType, EndpointDef[]>> {
  const endpoints = getEndpoints();
  const by: Record<InputType, Record<OutputType, EndpointDef[]>> = {};
  for (const endpoint of endpoints) {
    if (!(endpoint.inputType in by)) {
      by[endpoint.inputType] = {};
    }
    if (!(endpoint.outputType in by[endpoint.inputType])) {
      by[endpoint.inputType][endpoint.outputType] = [];
    }
    by[endpoint.inputType][endpoint.outputType].push(endpoint);
  }
  return by;
}

function getPostModels(def: PathDef): Pick<EndpointDef, 'models' | 'defaultModel'> {
  const modelsParam = def.post.parameters.filter((p) => p.name === 'model')[0];
  if (modelsParam.schema.type === 'integer') {
    throw { kind: 'InvalidSchema', def };
  }
  const models = modelsParam.schema.enum ?? [];
  models.sort();
  return { models, defaultModel: modelsParam.schema.default };
}

function getPostParams(def: PathDef, openApiJson: OpenApiJson) {
  const defParams = def.post.parameters.filter((p) => p.name !== 'model');
  const params: EndpointDefParam[] = defParams.map(
    (p): EndpointDefParam => ({
      in: 'query',
      type: p.schema.type,
      name: p.name,
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
      params.push(
        ...Object.entries(component.properties).map(([propName, propSchema]): EndpointDefParam => {
          const isRequired = component.required?.includes(propName) ?? false;
          return { in: 'formData', type: propSchema.format, name: propName, required: isRequired };
        }),
      );
    });
  }
  return params;
}

export interface EndpointDef {
  url: string;
  inputType: string;
  outputType: string;
  taskName: string;
  models: string[];
  defaultModel: string;
  params: EndpointDefParam[];
}

export interface EndpointDefParam {
  in: 'query' | 'formData';
  type: 'binary' | 'string' | 'integer';
  name: string;
  required: boolean;
}

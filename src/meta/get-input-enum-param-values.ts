import { EndpointDef, EndpointDefParam } from './endpoint-defs-type';
import { kebabToSnakeCase } from './utils';

export function getInputEnumParamValues(endpoint: EndpointDef, param: EndpointDefParam): string {
  const inputType = endpoint.inputType.toUpperCase();
  const outputType = endpoint.outputType.toUpperCase();
  const taskName = kebabToSnakeCase(endpoint.taskName).toUpperCase();
  const paramName = param.name.toUpperCase();
  return `${inputType}_${outputType}_${taskName}_ENUM_PARAM_${paramName}_VALUES`;
}

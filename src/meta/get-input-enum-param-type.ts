import { EndpointDef, EndpointDefParam } from './endpoint-defs-type';
import { capitalizeFirst, kebabToPascalCase } from './utils';

export function getInputEnumParamType(endpoint: EndpointDef, param: EndpointDefParam): string {
  const inputType = capitalizeFirst(endpoint.inputType);
  const outputType = capitalizeFirst(endpoint.outputType);
  const taskName = kebabToPascalCase(endpoint.taskName);
  const paramName = capitalizeFirst(param.name);
  return `${inputType}${outputType}${taskName}EnumParam${paramName}`;
}

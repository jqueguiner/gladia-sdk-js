import { EndpointDef } from './get-endpoints';
import { capitalizeFirst, kebabToPascalCase } from './utils';

export function getModelTypeName(endpoint: EndpointDef): string {
  const inputType = capitalizeFirst(endpoint.inputType);
  const outputType = capitalizeFirst(endpoint.outputType);
  const endpointName = kebabToPascalCase(endpoint.taskName);
  return `${inputType}${outputType}${endpointName}Model`;
}

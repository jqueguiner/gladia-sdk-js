import { capitalizeFirst, kebabToPascalCase } from './utils';
export function getModelTypeName(endpoint) {
    const inputType = capitalizeFirst(endpoint.inputType);
    const outputType = capitalizeFirst(endpoint.outputType);
    const endpointName = kebabToPascalCase(endpoint.taskName);
    return `${inputType}${outputType}${endpointName}Model`;
}

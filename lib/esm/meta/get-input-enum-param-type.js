import { capitalizeFirst, kebabToPascalCase } from './utils';
export function getInputEnumParamType(endpoint, param) {
    const inputType = capitalizeFirst(endpoint.inputType);
    const outputType = capitalizeFirst(endpoint.outputType);
    const taskName = kebabToPascalCase(endpoint.taskName);
    const paramName = capitalizeFirst(param.name);
    return `${inputType}${outputType}${taskName}EnumParam${paramName}`;
}

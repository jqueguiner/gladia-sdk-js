import { capitalizeFirst, kebabToPascalCase } from './utils';
export function getOutputModelType(endpoint) {
    const inputType = capitalizeFirst(endpoint.inputType);
    const outputType = capitalizeFirst(endpoint.outputType);
    const taskName = kebabToPascalCase(endpoint.taskName);
    return `${inputType}${outputType}${taskName}Outputs`;
}
export function getOutputModelTypeOneSample(endpoint) {
    const inputType = capitalizeFirst(endpoint.inputType);
    const outputType = capitalizeFirst(endpoint.outputType);
    const taskName = kebabToPascalCase(endpoint.taskName);
    return `${inputType}${outputType}${taskName}OutputsOneSample`;
}
export function getOutputModelTypeMultipleSamples(endpoint) {
    const inputType = capitalizeFirst(endpoint.inputType);
    const outputType = capitalizeFirst(endpoint.outputType);
    const taskName = kebabToPascalCase(endpoint.taskName);
    return `${inputType}${outputType}${taskName}OutputsMultipleSamples`;
}
export function getOutputModelTypeOneSampleAsUrl(endpoint) {
    const inputType = capitalizeFirst(endpoint.inputType);
    const outputType = capitalizeFirst(endpoint.outputType);
    const taskName = kebabToPascalCase(endpoint.taskName);
    return `${inputType}${outputType}${taskName}OutputsOneSampleAsUrl`;
}
export function getOutputModelTypeMultipleSamplesAsUrl(endpoint) {
    const inputType = capitalizeFirst(endpoint.inputType);
    const outputType = capitalizeFirst(endpoint.outputType);
    const taskName = kebabToPascalCase(endpoint.taskName);
    return `${inputType}${outputType}${taskName}OutputsMultipleSamplesAsUrl`;
}

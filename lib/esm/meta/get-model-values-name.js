import { kebabToSnakeCase } from './utils';
export function getModelValuesName(endpoint) {
    const inputType = endpoint.inputType.toUpperCase();
    const outputType = endpoint.outputType.toUpperCase();
    const taskName = kebabToSnakeCase(endpoint.taskName).toUpperCase();
    return `${inputType}_${outputType}_${taskName}_MODELS`;
}

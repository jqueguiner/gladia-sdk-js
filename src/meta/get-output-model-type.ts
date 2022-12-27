import { EndpointDef } from './endpoint-defs-type';
import { capitalizeFirst, kebabToPascalCase } from './utils';

export function getOutputModelType(endpoint: EndpointDef): string {
  const inputType = capitalizeFirst(endpoint.inputType);
  const outputType = capitalizeFirst(endpoint.outputType);
  const taskName = kebabToPascalCase(endpoint.taskName);
  return `${inputType}${outputType}${taskName}Outputs`;
}

export function getOutputModelTypeOneSample(endpoint: EndpointDef): string {
  const inputType = capitalizeFirst(endpoint.inputType);
  const outputType = capitalizeFirst(endpoint.outputType);
  const taskName = kebabToPascalCase(endpoint.taskName);
  return `${inputType}${outputType}${taskName}OutputsOneSample`;
}

export function getOutputModelTypeMultipleSamples(endpoint: EndpointDef): string {
  const inputType = capitalizeFirst(endpoint.inputType);
  const outputType = capitalizeFirst(endpoint.outputType);
  const taskName = kebabToPascalCase(endpoint.taskName);
  return `${inputType}${outputType}${taskName}OutputsMultipleSamples`;
}

export function getOutputModelTypeOneSampleAsUrl(endpoint: EndpointDef): string {
  const inputType = capitalizeFirst(endpoint.inputType);
  const outputType = capitalizeFirst(endpoint.outputType);
  const taskName = kebabToPascalCase(endpoint.taskName);
  return `${inputType}${outputType}${taskName}OutputsOneSampleAsUrl`;
}

export function getOutputModelTypeMultipleSamplesAsUrl(endpoint: EndpointDef): string {
  const inputType = capitalizeFirst(endpoint.inputType);
  const outputType = capitalizeFirst(endpoint.outputType);
  const taskName = kebabToPascalCase(endpoint.taskName);
  return `${inputType}${outputType}${taskName}OutputsMultipleSamplesAsUrl`;
}

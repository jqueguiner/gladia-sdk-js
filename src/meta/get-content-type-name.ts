import { EndpointDef } from './get-endpoints';

export function getContentTypeName(endpoint: EndpointDef) {
  const inputType = endpoint.inputType.toUpperCase();
  const outputType = endpoint.outputType.toUpperCase();
  const taskName = endpoint.taskName.replace(/-/g, '_').toUpperCase();
  return `${inputType}_${outputType}_${taskName}_CONTENT_TYPE`;
}

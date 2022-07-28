import { EndpointDef } from './get-endpoints';
import { kebabToCamelCase } from './utils';

export function getMethodName(endpoint: EndpointDef): string {
  return kebabToCamelCase(endpoint.taskName);
}

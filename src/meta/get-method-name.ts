import { EndpointDef } from './endpoint-defs-type';
import { kebabToCamelCase } from './utils';

export function getMethodName(endpoint: EndpointDef): string {
  return kebabToCamelCase(endpoint.taskName);
}

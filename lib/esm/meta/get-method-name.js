import { kebabToCamelCase } from './utils';
export function getMethodName(endpoint) {
    return kebabToCamelCase(endpoint.taskName);
}

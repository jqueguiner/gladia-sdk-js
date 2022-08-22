import { GladiaClient } from './gladia-client';
export function gladia(params) {
    return new GladiaClient(params);
}
export default gladia;
export { GladiaClient } from './gladia-client';
export * from './models';
export * as meta from './meta';

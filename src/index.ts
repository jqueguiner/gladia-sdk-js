import { GladiaClient } from './gladia-client';
import { GladiaClientParams } from './client/gladia-client-params';

export function gladia(params: GladiaClientParams) {
  return new GladiaClient(params);
}

export default gladia;

export * from './models';

export * as meta from './meta';

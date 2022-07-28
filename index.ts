import { GladiaClient } from './src/gladia-client';
import { GladiaClientParams } from './src/client/gladia-client-params';

export function gladia(params: GladiaClientParams) {
  return new GladiaClient(params);
}

export default gladia;

export * from './src/models';

export * as meta from './src/meta';

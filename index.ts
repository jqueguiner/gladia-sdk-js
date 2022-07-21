import { GladiaClient, GladiaClientParams } from './src/gladia-client';

export function gladia(params: GladiaClientParams) {
  return new GladiaClient(params);
}

export default gladia;

export * from './src/models';

import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.object.entries';
import 'core-js/modules/es.object.from-entries';
import 'core-js/modules/es.promise';

declare global {
  interface Window {
    require: NodeRequire;
  }
}

if (typeof window === 'undefined' && typeof process === 'object') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  globalThis.FormData = require('formdata-polyfill/esm.min.js').FormData;
} else {
  window.require = (() => void 0) as unknown as NodeRequire;
}

export * from './index';
import * as index from './index';
export default index.default;

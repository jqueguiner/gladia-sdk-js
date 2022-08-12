import * as meta from '../src/meta';

const endpoints = meta.getEndpoints();

console.log(JSON.stringify(endpoints, undefined, 2));

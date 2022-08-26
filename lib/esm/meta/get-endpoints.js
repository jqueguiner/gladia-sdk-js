import { ENDPOINT_DEFS } from './endpoint-defs';
export function getEndpoints() {
    return ENDPOINT_DEFS;
}
export function getEndpointsByInputOutput() {
    const endpoints = getEndpoints();
    const by = {};
    for (const endpoint of endpoints) {
        if (!(endpoint.inputType in by)) {
            by[endpoint.inputType] = {};
        }
        if (!(endpoint.outputType in by[endpoint.inputType])) {
            by[endpoint.inputType][endpoint.outputType] = [];
        }
        by[endpoint.inputType][endpoint.outputType].push(endpoint);
    }
    return by;
}

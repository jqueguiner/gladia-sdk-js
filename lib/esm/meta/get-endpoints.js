import { ENDPOINT_DEFS } from './endpoint-defs';
export function getEndpoints() {
    return ENDPOINT_DEFS;
    // return Object.entries(openApiJson.paths).map(([path, def]) => {
    //   const [, inputType, outputType, taskName] = path.split('/');
    //   return {
    //     url: path,
    //     inputType,
    //     outputType,
    //     taskName,
    //     ...getPostModels(def),
    //     ...getInputBodyContentType(inputType),
    //     params: getPostParams(def, openApiJson),
    //   };
    // });
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

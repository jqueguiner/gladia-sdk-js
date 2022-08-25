"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointsByInputOutput = exports.getEndpoints = void 0;
var endpoint_defs_1 = require("./endpoint-defs");
function getEndpoints() {
    return endpoint_defs_1.ENDPOINT_DEFS;
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
exports.getEndpoints = getEndpoints;
function getEndpointsByInputOutput() {
    var endpoints = getEndpoints();
    var by = {};
    for (var _i = 0, endpoints_1 = endpoints; _i < endpoints_1.length; _i++) {
        var endpoint = endpoints_1[_i];
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
exports.getEndpointsByInputOutput = getEndpointsByInputOutput;

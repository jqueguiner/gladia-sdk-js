"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointsByInputOutput = exports.getEndpoints = void 0;
var tslib_1 = require("tslib");
var endpoint_defs_1 = require("./endpoint-defs");
function getEndpoints() {
    return endpoint_defs_1.ENDPOINT_DEFS;
}
exports.getEndpoints = getEndpoints;
function getEndpointsByInputOutput() {
    var e_1, _a;
    var endpoints = getEndpoints();
    var by = {};
    try {
        for (var endpoints_1 = tslib_1.__values(endpoints), endpoints_1_1 = endpoints_1.next(); !endpoints_1_1.done; endpoints_1_1 = endpoints_1.next()) {
            var endpoint = endpoints_1_1.value;
            if (!(endpoint.inputType in by)) {
                by[endpoint.inputType] = {};
            }
            if (!(endpoint.outputType in by[endpoint.inputType])) {
                by[endpoint.inputType][endpoint.outputType] = [];
            }
            by[endpoint.inputType][endpoint.outputType].push(endpoint);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (endpoints_1_1 && !endpoints_1_1.done && (_a = endpoints_1.return)) _a.call(endpoints_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return by;
}
exports.getEndpointsByInputOutput = getEndpointsByInputOutput;

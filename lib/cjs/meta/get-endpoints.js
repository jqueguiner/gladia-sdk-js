"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointsByInputOutput = exports.getEndpoints = void 0;
var openapidef_1 = require("./openapidef");
function getEndpoints() {
    return Object.entries(openapidef_1.openApiJson.paths).map(function (_a) {
        var path = _a[0], def = _a[1];
        var _b = path.split('/'), inputType = _b[1], outputType = _b[2], taskName = _b[3];
        return __assign(__assign({ url: path, inputType: inputType, outputType: outputType, taskName: taskName }, getPostModels(def)), { params: getPostParams(def, openapidef_1.openApiJson) });
    });
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
function getPostModels(def) {
    var _a;
    var modelsParam = def.post.parameters.filter(function (p) { return p.name === 'model'; })[0];
    if (modelsParam.schema.type === 'integer') {
        throw { kind: 'InvalidSchema', def: def };
    }
    var models = (_a = modelsParam.schema.enum) !== null && _a !== void 0 ? _a : [];
    models.sort();
    return { models: models, defaultModel: modelsParam.schema.default };
}
function getPostParams(def, openApiJson) {
    var defParams = def.post.parameters.filter(function (p) { return p.name !== 'model'; });
    var params = defParams.map(function (p) { return ({
        in: 'query',
        type: p.schema.type,
        name: p.name,
        required: p.required,
    }); });
    if (def.post.requestBody) {
        Object.values(def.post.requestBody.content).forEach(function (schema) {
            var componentRef = schema.schema.$ref;
            if (!componentRef) {
                return;
            }
            var component = openApiJson.components.schemas[componentRef.substring('#/components/schemas/'.length)];
            params.push.apply(params, Object.entries(component.properties).map(function (_a) {
                var _b, _c;
                var propName = _a[0], propSchema = _a[1];
                var isRequired = (_c = (_b = component.required) === null || _b === void 0 ? void 0 : _b.includes(propName)) !== null && _c !== void 0 ? _c : false;
                return { in: 'formData', type: propSchema.format, name: propName, required: isRequired };
            }));
        });
    }
    return params;
}

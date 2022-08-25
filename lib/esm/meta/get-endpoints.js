import { openApiJson } from './openapidef';
export function getEndpoints() {
    return Object.entries(openApiJson.paths).map(([path, def]) => {
        const [, inputType, outputType, taskName] = path.split('/');
        return {
            url: path,
            inputType,
            outputType,
            taskName,
            ...getPostModels(def),
            ...getInputBodyContentType(inputType),
            params: getPostParams(def, openApiJson),
        };
    });
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
function getPostModels(def) {
    var _a;
    const modelsParam = def.post.parameters.filter((p) => p.name === 'model')[0];
    if (modelsParam.schema.type === 'integer') {
        throw { kind: 'InvalidSchema', def };
    }
    const models = (_a = modelsParam.schema.enum) !== null && _a !== void 0 ? _a : [];
    models.sort();
    return { models, defaultModel: modelsParam.schema.default };
}
function getInputBodyContentType(inputType) {
    switch (inputType) {
        case 'text':
            return { inputBodyContentType: 'application/x-www-form-urlencoded' };
        case 'audio':
        case 'image':
        case 'video':
            return { inputBodyContentType: 'multipart/form-data' };
        default:
            throw { kind: 'InvalidInputType', inputType };
    }
}
function getPostParams(def, openApiJson) {
    const defParams = def.post.parameters.filter((p) => p.name !== 'model');
    const params = defParams.map((p) => ({
        in: 'query',
        type: p.schema.type,
        name: p.name,
        required: p.required,
    }));
    if (def.post.requestBody) {
        Object.values(def.post.requestBody.content).forEach((schema) => {
            const componentRef = schema.schema.$ref;
            if (!componentRef) {
                return;
            }
            const component = openApiJson.components.schemas[componentRef.substring('#/components/schemas/'.length)];
            params.push(...Object.entries(component.properties).map(([propName, propSchema]) => {
                var _a, _b;
                const isRequired = (_b = (_a = component.required) === null || _a === void 0 ? void 0 : _a.includes(propName)) !== null && _b !== void 0 ? _b : false;
                const type = (() => {
                    switch (propSchema.data_type) {
                        case 'int':
                            return 'integer';
                        case 'float':
                            return 'float';
                        case 'url':
                            return 'url';
                        case 'audio':
                            return 'audio';
                        case 'image':
                            return 'image';
                        case 'array':
                            return 'array';
                        case 'text':
                        default:
                            return 'string';
                    }
                })();
                return { in: 'formData', type, name: propName, required: isRequired };
            }));
        });
    }
    return params;
}

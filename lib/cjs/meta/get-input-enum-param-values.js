"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInputEnumParamValues = void 0;
var utils_1 = require("./utils");
function getInputEnumParamValues(endpoint, param) {
    var inputType = endpoint.inputType.toUpperCase();
    var outputType = endpoint.outputType.toUpperCase();
    var taskName = (0, utils_1.kebabToSnakeCase)(endpoint.taskName).toUpperCase();
    var paramName = param.name.toUpperCase();
    return "".concat(inputType, "_").concat(outputType, "_").concat(taskName, "_ENUM_PARAM_").concat(paramName, "_VALUES");
}
exports.getInputEnumParamValues = getInputEnumParamValues;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInputEnumParamType = void 0;
var utils_1 = require("./utils");
function getInputEnumParamType(endpoint, param) {
    var inputType = (0, utils_1.capitalizeFirst)(endpoint.inputType);
    var outputType = (0, utils_1.capitalizeFirst)(endpoint.outputType);
    var taskName = (0, utils_1.kebabToPascalCase)(endpoint.taskName);
    var paramName = (0, utils_1.capitalizeFirst)(param.name);
    return "".concat(inputType).concat(outputType).concat(taskName, "EnumParam").concat(paramName);
}
exports.getInputEnumParamType = getInputEnumParamType;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModelValuesName = void 0;
var utils_1 = require("./utils");
function getModelValuesName(endpoint) {
    var inputType = endpoint.inputType.toUpperCase();
    var outputType = endpoint.outputType.toUpperCase();
    var taskName = (0, utils_1.kebabToSnakeCase)(endpoint.taskName).toUpperCase();
    return "".concat(inputType, "_").concat(outputType, "_").concat(taskName, "_MODELS");
}
exports.getModelValuesName = getModelValuesName;

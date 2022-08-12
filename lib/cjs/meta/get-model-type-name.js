"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModelTypeName = void 0;
var utils_1 = require("./utils");
function getModelTypeName(endpoint) {
    var inputType = (0, utils_1.capitalizeFirst)(endpoint.inputType);
    var outputType = (0, utils_1.capitalizeFirst)(endpoint.outputType);
    var endpointName = (0, utils_1.kebabToPascalCase)(endpoint.taskName);
    return "".concat(inputType).concat(outputType).concat(endpointName, "Model");
}
exports.getModelTypeName = getModelTypeName;

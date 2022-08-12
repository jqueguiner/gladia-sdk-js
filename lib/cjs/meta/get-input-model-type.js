"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInputModelType = void 0;
var utils_1 = require("./utils");
function getInputModelType(endpoint) {
    var inputType = (0, utils_1.capitalizeFirst)(endpoint.inputType);
    var outputType = (0, utils_1.capitalizeFirst)(endpoint.outputType);
    var taskName = (0, utils_1.kebabToPascalCase)(endpoint.taskName);
    return "".concat(inputType).concat(outputType).concat(taskName, "Inputs");
}
exports.getInputModelType = getInputModelType;

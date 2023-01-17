"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOutputModelTypeMultipleSamplesAsUrl = exports.getOutputModelTypeOneSampleAsUrl = exports.getOutputModelTypeMultipleSamples = exports.getOutputModelTypeOneSample = exports.getOutputModelType = void 0;
var utils_1 = require("./utils");
function getOutputModelType(endpoint) {
    var inputType = (0, utils_1.capitalizeFirst)(endpoint.inputType);
    var outputType = (0, utils_1.capitalizeFirst)(endpoint.outputType);
    var taskName = (0, utils_1.kebabToPascalCase)(endpoint.taskName);
    return "".concat(inputType).concat(outputType).concat(taskName, "Outputs");
}
exports.getOutputModelType = getOutputModelType;
function getOutputModelTypeOneSample(endpoint) {
    var inputType = (0, utils_1.capitalizeFirst)(endpoint.inputType);
    var outputType = (0, utils_1.capitalizeFirst)(endpoint.outputType);
    var taskName = (0, utils_1.kebabToPascalCase)(endpoint.taskName);
    return "".concat(inputType).concat(outputType).concat(taskName, "OutputsOneSample");
}
exports.getOutputModelTypeOneSample = getOutputModelTypeOneSample;
function getOutputModelTypeMultipleSamples(endpoint) {
    var inputType = (0, utils_1.capitalizeFirst)(endpoint.inputType);
    var outputType = (0, utils_1.capitalizeFirst)(endpoint.outputType);
    var taskName = (0, utils_1.kebabToPascalCase)(endpoint.taskName);
    return "".concat(inputType).concat(outputType).concat(taskName, "OutputsMultipleSamples");
}
exports.getOutputModelTypeMultipleSamples = getOutputModelTypeMultipleSamples;
function getOutputModelTypeOneSampleAsUrl(endpoint) {
    var inputType = (0, utils_1.capitalizeFirst)(endpoint.inputType);
    var outputType = (0, utils_1.capitalizeFirst)(endpoint.outputType);
    var taskName = (0, utils_1.kebabToPascalCase)(endpoint.taskName);
    return "".concat(inputType).concat(outputType).concat(taskName, "OutputsOneSampleAsUrl");
}
exports.getOutputModelTypeOneSampleAsUrl = getOutputModelTypeOneSampleAsUrl;
function getOutputModelTypeMultipleSamplesAsUrl(endpoint) {
    var inputType = (0, utils_1.capitalizeFirst)(endpoint.inputType);
    var outputType = (0, utils_1.capitalizeFirst)(endpoint.outputType);
    var taskName = (0, utils_1.kebabToPascalCase)(endpoint.taskName);
    return "".concat(inputType).concat(outputType).concat(taskName, "OutputsMultipleSamplesAsUrl");
}
exports.getOutputModelTypeMultipleSamplesAsUrl = getOutputModelTypeMultipleSamplesAsUrl;

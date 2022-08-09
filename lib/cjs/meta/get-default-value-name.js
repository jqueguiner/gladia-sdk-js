"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultValueName = void 0;
function getDefaultValueName(endpoint) {
    var inputType = endpoint.inputType.toUpperCase();
    var outputType = endpoint.outputType.toUpperCase();
    var taskName = endpoint.taskName.replace(/-/g, '_').toUpperCase();
    return inputType + "_" + outputType + "_" + taskName + "_DEFAULT_MODEL";
}
exports.getDefaultValueName = getDefaultValueName;

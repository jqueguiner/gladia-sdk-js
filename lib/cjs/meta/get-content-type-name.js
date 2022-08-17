"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentTypeName = void 0;
function getContentTypeName(endpoint) {
    var inputType = endpoint.inputType.toUpperCase();
    var outputType = endpoint.outputType.toUpperCase();
    var taskName = endpoint.taskName.replace(/-/g, '_').toUpperCase();
    return "".concat(inputType, "_").concat(outputType, "_").concat(taskName, "_CONTENT_TYPE");
}
exports.getContentTypeName = getContentTypeName;

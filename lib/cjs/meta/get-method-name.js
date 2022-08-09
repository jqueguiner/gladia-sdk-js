"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMethodName = void 0;
var utils_1 = require("./utils");
function getMethodName(endpoint) {
    return (0, utils_1.kebabToCamelCase)(endpoint.taskName);
}
exports.getMethodName = getMethodName;

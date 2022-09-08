"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = exports.GladiaClient = exports.gladia = void 0;
var tslib_1 = require("tslib");
var gladia_client_1 = require("./gladia-client");
function gladia(params) {
    return new gladia_client_1.GladiaClient(params);
}
exports.gladia = gladia;
exports.default = gladia;
var gladia_client_2 = require("./gladia-client");
Object.defineProperty(exports, "GladiaClient", { enumerable: true, get: function () { return gladia_client_2.GladiaClient; } });
tslib_1.__exportStar(require("./models"), exports);
exports.meta = tslib_1.__importStar(require("./meta"));

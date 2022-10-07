"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GladiaClientBase = void 0;
var Trainables_1 = require("./Trainables");
var GladiaClientBase = /** @class */ (function () {
    function GladiaClientBase(params) {
        this.trainableInst = new Trainables_1.Trainables(params);
    }
    GladiaClientBase.prototype.trainable = function () {
        return this.trainableInst;
    };
    return GladiaClientBase;
}());
exports.GladiaClientBase = GladiaClientBase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainables = void 0;
var AutoMLTrainable_1 = require("./automl/AutoMLTrainable");
var Trainables = /** @class */ (function () {
    function Trainables(params) {
        this.autoMLInst = new AutoMLTrainable_1.AutoMLTrainable(params);
    }
    Trainables.prototype.automl = function () {
        return this.autoMLInst;
    };
    return Trainables;
}());
exports.Trainables = Trainables;

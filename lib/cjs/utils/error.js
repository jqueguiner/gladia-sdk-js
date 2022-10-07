"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewFeatureError = void 0;
var tslib_1 = require("tslib");
var PreviewFeatureError = /** @class */ (function (_super) {
    tslib_1.__extends(PreviewFeatureError, _super);
    function PreviewFeatureError() {
        return _super.call(this, 'This feature is not available without enabling preview feature.') || this;
    }
    return PreviewFeatureError;
}(Error));
exports.PreviewFeatureError = PreviewFeatureError;

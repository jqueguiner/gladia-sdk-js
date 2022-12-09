"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoMLTrainable = void 0;
var tslib_1 = require("tslib");
var http_client_1 = require("../../internal/http-client");
var error_1 = require("../../utils/error");
var fp_1 = require("../../utils/fp");
var gladia_client_params_1 = require("../gladia-client-params");
var AutoMLTrainable = /** @class */ (function () {
    function AutoMLTrainable(params) {
        this.params = params;
        if ((0, gladia_client_params_1.isPreviewEnabled)(params)) {
            this.httpClient = (0, http_client_1.getHttpClient)(this.params);
        }
    }
    AutoMLTrainable.prototype.train = function (args) {
        var _a;
        if (!(0, gladia_client_params_1.isPreviewEnabled)(this.params)) {
            throw new error_1.PreviewFeatureError();
        }
        var body = {
            data: args.data,
            label: args.label,
        };
        if ((0, fp_1.isDefined)(args.eval_metric)) {
            body.eval_metric = args.eval_metric;
        }
        if ((0, fp_1.isDefined)(args.time_limit)) {
            body.time_limit = args.time_limit;
        }
        return this.httpClient.post({
            url: "/automl/train",
            headers: tslib_1.__assign({ 'Content-Type': 'application/json' }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            responseType: 'json',
            body: JSON.stringify(body),
        });
    };
    AutoMLTrainable.prototype.predict = function (args) {
        var _a;
        if (!(0, gladia_client_params_1.isPreviewEnabled)(this.params)) {
            throw new error_1.PreviewFeatureError();
        }
        var body = {
            model_id: args.model_id,
            data: args.data,
        };
        return this.httpClient.post({
            url: "/automl/predict",
            headers: tslib_1.__assign({ 'Content-Type': 'application/json' }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            responseType: 'json',
            body: JSON.stringify(body),
        });
    };
    return AutoMLTrainable;
}());
exports.AutoMLTrainable = AutoMLTrainable;

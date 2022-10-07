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
        if ((0, gladia_client_params_1.isPreviewEnabled)(params) && (0, fp_1.isDefined)(params.autoMlBaseUrl)) {
            this.httpClient = (0, http_client_1.getHttpClient)(Object.assign({}, params, { baseUrl: params.autoMlBaseUrl }));
        }
    }
    AutoMLTrainable.prototype.train = function (args) {
        var _a, _b;
        if (!(0, gladia_client_params_1.isPreviewEnabled)(this.params) || (0, fp_1.isNotDefined)(this.params.autoMlBaseUrl)) {
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
        var kind = (_a = args.kind) !== null && _a !== void 0 ? _a : 'multimodal';
        return this.httpClient.post({
            url: "/".concat(kind, "/create-model/"),
            headers: tslib_1.__assign({ 'Content-Type': 'application/json' }, ((_b = args.headers) !== null && _b !== void 0 ? _b : {})),
            responseType: 'json',
            body: body,
        });
    };
    AutoMLTrainable.prototype.predict = function (args) {
        var _a, _b;
        if (!(0, gladia_client_params_1.isPreviewEnabled)(this.params) || (0, fp_1.isNotDefined)(this.params.autoMlBaseUrl)) {
            throw new error_1.PreviewFeatureError();
        }
        var body = {
            model_id: args.model_id,
            data: args.data,
        };
        var kind = (_a = args.kind) !== null && _a !== void 0 ? _a : 'multimodal';
        return this.httpClient.post({
            url: "/".concat(kind, "/predict/"),
            headers: tslib_1.__assign({ 'Content-Type': 'application/json' }, ((_b = args.headers) !== null && _b !== void 0 ? _b : {})),
            responseType: 'json',
            body: body,
        });
    };
    return AutoMLTrainable;
}());
exports.AutoMLTrainable = AutoMLTrainable;

import { getHttpClient } from '../../internal/http-client';
import { PreviewFeatureError } from '../../utils/error';
import { isDefined, isNotDefined } from '../../utils/fp';
import { isPreviewEnabled } from '../gladia-client-params';
export class AutoMLTrainable {
    constructor(params) {
        this.params = params;
        if (isPreviewEnabled(params) && isDefined(params.autoMlBaseUrl)) {
            this.httpClient = getHttpClient(Object.assign({}, params, { baseUrl: params.autoMlBaseUrl }));
        }
    }
    train(args) {
        var _a, _b;
        if (!isPreviewEnabled(this.params) || isNotDefined(this.params.autoMlBaseUrl)) {
            throw new PreviewFeatureError();
        }
        const body = {
            data: args.data,
            label: args.label,
        };
        if (isDefined(args.eval_metric)) {
            body.eval_metric = args.eval_metric;
        }
        if (isDefined(args.time_limit)) {
            body.time_limit = args.time_limit;
        }
        const kind = (_a = args.kind) !== null && _a !== void 0 ? _a : 'multimodal';
        return this.httpClient.post({
            url: `/${kind}/create-model/`,
            headers: {
                'Content-Type': 'application/json',
                ...((_b = args.headers) !== null && _b !== void 0 ? _b : {}),
            },
            responseType: 'json',
            body,
        });
    }
    predict(args) {
        var _a, _b;
        if (!isPreviewEnabled(this.params) || isNotDefined(this.params.autoMlBaseUrl)) {
            throw new PreviewFeatureError();
        }
        const body = {
            model_id: args.model_id,
            data: args.data,
        };
        const kind = (_a = args.kind) !== null && _a !== void 0 ? _a : 'multimodal';
        return this.httpClient.post({
            url: `/${kind}/predict/`,
            headers: {
                'Content-Type': 'application/json',
                ...((_b = args.headers) !== null && _b !== void 0 ? _b : {}),
            },
            responseType: 'json',
            body,
        });
    }
}

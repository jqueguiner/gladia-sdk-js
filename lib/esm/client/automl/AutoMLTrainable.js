import { getHttpClient } from '../../internal/http-client';
import { PreviewFeatureError } from '../../utils/error';
import { isDefined } from '../../utils/fp';
import { isPreviewEnabled } from '../gladia-client-params';
export class AutoMLTrainable {
    constructor(params) {
        this.params = params;
        if (isPreviewEnabled(params)) {
            this.httpClient = getHttpClient(this.params);
        }
    }
    train(args) {
        var _a;
        if (!isPreviewEnabled(this.params)) {
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
        return this.httpClient.post({
            url: `/automl/train`,
            headers: {
                'Content-Type': 'application/json',
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            responseType: 'json',
            body: JSON.stringify(body),
        });
    }
    predict(args) {
        var _a;
        if (!isPreviewEnabled(this.params)) {
            throw new PreviewFeatureError();
        }
        const body = {
            model_id: args.model_id,
            data: args.data,
        };
        return this.httpClient.post({
            url: `/automl/predict`,
            headers: {
                'Content-Type': 'application/json',
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            responseType: 'json',
            body: JSON.stringify(body),
        });
    }
}

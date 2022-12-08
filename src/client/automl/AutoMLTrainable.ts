import { getHttpClient, HttpClient } from '../../internal/http-client';
import { PreviewFeatureError } from '../../utils/error';
import { isDefined } from '../../utils/fp';
import { GladiaClientParams, isPreviewEnabled } from '../gladia-client-params';
import {
  AutoMlPredictInputParams,
  AutoMlPredictRequestBody,
  AutoMlTrainInputParams,
  AutoMlTrainRequestBody,
} from './inputs.model';
import { AutoMlPredictOutput, AutoMlTrainOutput } from './outputs.model';

export class AutoMLTrainable {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    if (isPreviewEnabled(params)) {
      this.httpClient = getHttpClient(this.params);
    }
  }

  train<T = unknown>(args: AutoMlTrainInputParams<T>): Promise<AutoMlTrainOutput> {
    if (!isPreviewEnabled(this.params)) {
      throw new PreviewFeatureError();
    }
    const body: AutoMlTrainRequestBody<T> = {
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
        ...(args.headers ?? {}),
      },
      responseType: 'json',
      body: JSON.stringify(body),
    });
  }

  predict<TData = unknown, TResult = unknown>(
    args: AutoMlPredictInputParams<TData>,
  ): Promise<AutoMlPredictOutput<TResult[]>> {
    if (!isPreviewEnabled(this.params)) {
      throw new PreviewFeatureError();
    }
    const body: AutoMlPredictRequestBody<TData> = {
      model_id: args.model_id,
      data: args.data,
    };
    return this.httpClient.post({
      url: `/automl/predict`,
      headers: {
        'Content-Type': 'application/json',
        ...(args.headers ?? {}),
      },
      responseType: 'json',
      body: JSON.stringify(body),
    });
  }
}

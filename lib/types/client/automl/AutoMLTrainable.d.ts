import { GladiaClientParams } from '../gladia-client-params';
import { AutoMlPredictInputParams, AutoMlTrainInputParams } from './inputs.model';
import { AutoMlPredictOutput, AutoMlTrainOutput } from './outputs.model';
export declare class AutoMLTrainable {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    train<T = unknown>(args: AutoMlTrainInputParams<T>): Promise<AutoMlTrainOutput>;
    predict<TData = unknown, TResult = unknown>(args: AutoMlPredictInputParams<TData>): Promise<AutoMlPredictOutput<TResult[]>>;
}

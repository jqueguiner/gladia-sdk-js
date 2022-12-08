import { WithHeaders } from '../types';
export declare type AutoMlDataObject = Record<string, unknown[]>;
export declare type AutoMlDataArray<T = unknown> = T[];
export declare type AutoMlData<T = unknown> = AutoMlDataObject | AutoMlDataArray<T>;
export declare type AutoMlKind = 'multimodal' | 'text' | 'tabular';
export interface AutoMlTrainRequestBody<T> {
    data: AutoMlData<T>;
    label: string;
    time_limit?: number;
    eval_metric?: string;
}
export interface AutoMlTrainInputParams<T> extends WithHeaders, AutoMlTrainRequestBody<T> {
}
export interface AutoMlPredictRequestBody<T> {
    model_id: string;
    data: AutoMlData<T>;
}
export interface AutoMlPredictInputParams<T> extends WithHeaders, AutoMlPredictRequestBody<T> {
}

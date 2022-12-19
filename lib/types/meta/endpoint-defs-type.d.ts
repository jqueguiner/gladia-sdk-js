export declare type InputType = string;
export declare type OutputType = string;
export interface EndpointDef {
    url: string;
    inputType: string;
    outputType: string;
    taskName: string;
    models: string[];
    defaultModel: string;
    params: EndpointDefParam[];
    hasSamplesParam: boolean;
    inputBodyContentType: string;
    outputBodyContentType: OutputBodyContentType;
}
export interface EndpointDefParamBase<TType> {
    in: 'query' | 'formData';
    type: TType;
    name: string;
    required: boolean;
}
export declare type EnumEndpointDefParam = EndpointDefParamBase<'enum'> & {
    enumValues: string[];
};
export declare type EndpointDefParam = EndpointDefParamBase<'audio' | 'image' | 'video' | 'string' | 'integer' | 'float' | 'url' | 'array'> | EnumEndpointDefParam;
export declare type OutputBodyContentType = {
    type: 'prediction-standard-output';
    predictionType: 'string' | 'number' | 'array';
} | {
    type: 'binary';
} | {
    type: 'unknown';
};

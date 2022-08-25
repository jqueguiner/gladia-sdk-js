export declare function getEndpoints(): EndpointDef[];
declare type InputType = string;
declare type OutputType = string;
export declare function getEndpointsByInputOutput(): Record<InputType, Record<OutputType, EndpointDef[]>>;
export interface EndpointDef {
    url: string;
    inputType: string;
    outputType: string;
    taskName: string;
    models: string[];
    defaultModel: string;
    params: EndpointDefParam[];
    inputBodyContentType: string;
}
export interface EndpointDefParam {
    in: 'query' | 'formData';
    type: 'audio' | 'image' | 'string' | 'integer' | 'float' | 'url' | 'array';
    name: string;
    required: boolean;
}
export {};

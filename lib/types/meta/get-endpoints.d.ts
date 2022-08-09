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
}
export interface EndpointDefParam {
    in: 'query' | 'formData';
    type: 'binary' | 'string' | 'integer';
    name: string;
    required: boolean;
}
export {};

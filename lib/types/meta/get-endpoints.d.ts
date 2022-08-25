import { EndpointDef, InputType, OutputType } from './endpoint-defs-type';
export declare function getEndpoints(): EndpointDef[];
export declare function getEndpointsByInputOutput(): Record<InputType, Record<OutputType, EndpointDef[]>>;

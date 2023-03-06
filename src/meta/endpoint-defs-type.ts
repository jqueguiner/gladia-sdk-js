import { TaskName } from './task-names';

export type InputType = string;
export type OutputType = string;
export interface EndpointDef {
  url: string;
  inputType: string;
  outputType: string;
  taskName: TaskName;
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
  example: unknown;
  required: boolean;
}

export type EnumEndpointDefParam = EndpointDefParamBase<'enum'> & { enumValues: string[] };
export type EndpointDefParam =
  | EndpointDefParamBase<
      | 'bool'
      | 'boolean'
      | 'audio'
      | 'image'
      | 'video'
      | 'string'
      | 'integer'
      | 'float'
      | 'url'
      | 'array'
      | 'enumValues'
    >
  | EnumEndpointDefParam;

export type OutputBodyContentType =
  | {
      type: 'prediction-standard-output';
      predictionType: 'string' | 'number' | { array: 'string' | 'number' | 'object' };
    }
  | { type: 'binary' }
  | { type: 'unknown' };

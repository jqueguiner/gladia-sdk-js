export type InputType = string;
export type OutputType = string;
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

export type EnumEndpointDefParam = EndpointDefParamBase<'enum'> & { enumValues: string[] };
export type EndpointDefParam =
  | EndpointDefParamBase<
      'audio' | 'image' | 'video' | 'string' | 'integer' | 'float' | 'url' | 'array'
    >
  | EnumEndpointDefParam;

export type OutputBodyContentType =
  | { type: 'prediction-standard-output'; predictionType: 'string' | 'number' | 'array' }
  | { type: 'binary' }
  | { type: 'unknown' };

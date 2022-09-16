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

export interface EndpointDefParam {
  in: 'query' | 'formData';
  type: 'audio' | 'image' | 'string' | 'integer' | 'float' | 'url' | 'array';
  name: string;
  required: boolean;
}

export type OutputBodyContentType =
  | { type: 'prediction-standard-output'; predictionType: 'string' | 'number' | 'array' }
  | { type: 'binary' }
  | { type: 'unknown' };

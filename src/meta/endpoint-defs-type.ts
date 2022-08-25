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
  inputBodyContentType: string;
}

export interface EndpointDefParam {
  in: 'query' | 'formData';
  type: 'audio' | 'image' | 'string' | 'integer' | 'float' | 'url' | 'array';
  name: string;
  required: boolean;
}

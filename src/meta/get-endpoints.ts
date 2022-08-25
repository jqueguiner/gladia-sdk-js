import { ENDPOINT_DEFS } from './endpoint-defs';
import { EndpointDef, InputType, OutputType } from './endpoint-defs-type';

export function getEndpoints(): EndpointDef[] {
  return ENDPOINT_DEFS;
}

export function getEndpointsByInputOutput(): Record<InputType, Record<OutputType, EndpointDef[]>> {
  const endpoints = getEndpoints();
  const by: Record<InputType, Record<OutputType, EndpointDef[]>> = {};
  for (const endpoint of endpoints) {
    if (!(endpoint.inputType in by)) {
      by[endpoint.inputType] = {};
    }
    if (!(endpoint.outputType in by[endpoint.inputType])) {
      by[endpoint.inputType][endpoint.outputType] = [];
    }
    by[endpoint.inputType][endpoint.outputType].push(endpoint);
  }
  return by;
}

import { EndpointDef } from '../../src/meta';
import { getModelTypeName } from '../../src/meta/get-model-type-name';
import { p } from '../helpers/mocks';

describe(getModelTypeName.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getModelTypeName(endpoint)).toEqual('AudioTextAudioTranscriptionModel');
  });
});

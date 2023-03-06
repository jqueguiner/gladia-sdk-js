import { EndpointDef } from '../../src/meta';
import { getModelValuesName } from '../../src/meta/get-model-values-name';
import { p } from '../helpers/mocks';

describe(getModelValuesName.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getModelValuesName(endpoint)).toEqual('AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS');
  });
});

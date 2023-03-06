import { EndpointDef } from '../../src/meta';
import { getInputModelType } from '../../src/meta/get-input-model-type';
import { p } from '../helpers/mocks';

describe(getInputModelType.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getInputModelType(endpoint)).toEqual('AudioTextAudioTranscriptionInputs');
  });
});

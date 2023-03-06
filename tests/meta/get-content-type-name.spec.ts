import { EndpointDef } from '../../src/meta';
import { getContentTypeName } from '../../src/meta/get-content-type-name';
import { p } from '../helpers/mocks';

describe(getContentTypeName.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getContentTypeName(endpoint)).toEqual('AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE');
  });
});

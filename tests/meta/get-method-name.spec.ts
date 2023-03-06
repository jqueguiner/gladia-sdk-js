import { EndpointDef } from '../../src/meta';
import { getMethodName } from '../../src/meta/get-method-name';
import { p } from '../helpers/mocks';

describe(getMethodName.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      taskName: 'audio-transcription',
    });
    expect(getMethodName(endpoint)).toEqual('audioTranscription');
  });
});

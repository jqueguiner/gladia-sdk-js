import { EndpointDef, EndpointDefParam } from '../../src/meta';
import { getInputEnumParamValues } from '../../src/meta/get-input-enum-param-values';
import { p } from '../helpers/mocks';

describe(getInputEnumParamValues.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    const param = p<EndpointDefParam>({
      name: 'alignment',
    });
    expect(getInputEnumParamValues(endpoint, param)).toEqual(
      'AUDIO_TEXT_AUDIO_TRANSCRIPTION_ENUM_PARAM_ALIGNMENT_VALUES',
    );
  });
});

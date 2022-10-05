import { EndpointDef, EndpointDefParam } from '../../src/meta';
import { getInputEnumParamValues } from '../../src/meta/get-input-enum-param-values';
import { p } from '../helpers/mocks';

describe(getInputEnumParamValues.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'sentiment-analysis',
    });
    const param = p<EndpointDefParam>({
      name: 'alignment',
    });
    expect(getInputEnumParamValues(endpoint, param)).toEqual(
      'IMAGE_TEXT_SENTIMENT_ANALYSIS_ENUM_PARAM_ALIGNMENT_VALUES',
    );
  });
});

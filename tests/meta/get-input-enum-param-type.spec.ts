import { EndpointDef, EndpointDefParam } from '../../src/meta';
import { getInputEnumParamType } from '../../src/meta/get-input-enum-param-type';
import { p } from '../helpers/mocks';

describe(getInputEnumParamType.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'sentiment-analysis',
    });
    const param = p<EndpointDefParam>({
      name: 'alignment',
    });
    expect(getInputEnumParamType(endpoint, param)).toEqual(
      'ImageTextSentimentAnalysisEnumParamAlignment',
    );
  });
});

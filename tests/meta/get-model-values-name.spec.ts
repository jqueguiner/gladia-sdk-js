import { EndpointDef } from '../../src/meta';
import { getModelValuesName } from '../../src/meta/get-model-values-name';
import { p } from '../helpers/mocks';

describe(getModelValuesName.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'sentiment-analysis',
    });
    expect(getModelValuesName(endpoint)).toEqual('IMAGE_TEXT_SENTIMENT_ANALYSIS_MODELS');
  });
});

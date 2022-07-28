import { EndpointDef } from '../../src/meta';
import { getDefaultValueName } from '../../src/meta/get-default-value-name';
import { p } from '../helpers/mocks';

describe(getDefaultValueName.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'sentiment-analysis',
    });
    expect(getDefaultValueName(endpoint)).toEqual('IMAGE_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL');
  });
});

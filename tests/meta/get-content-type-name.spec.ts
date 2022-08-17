import { EndpointDef } from '../../src/meta';
import { getContentTypeName } from '../../src/meta/get-content-type-name';
import { p } from '../helpers/mocks';

describe(getContentTypeName.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'sentiment-analysis',
    });
    expect(getContentTypeName(endpoint)).toEqual('IMAGE_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE');
  });
});

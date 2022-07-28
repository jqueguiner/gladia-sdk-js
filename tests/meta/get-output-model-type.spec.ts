import { EndpointDef } from '../../src/meta';
import { getOutputModelType } from '../../src/meta/get-output-model-type';
import { p } from '../helpers/mocks';

describe(getOutputModelType.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'sentiment-analysis',
    });
    expect(getOutputModelType(endpoint)).toEqual('ImageTextSentimentAnalysisOutputs');
  });
});

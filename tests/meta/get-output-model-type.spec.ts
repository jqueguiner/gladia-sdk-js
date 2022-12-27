import { EndpointDef } from '../../src/meta';
import {
  getOutputModelType,
  getOutputModelTypeMultipleSamples,
  getOutputModelTypeMultipleSamplesAsUrl,
  getOutputModelTypeOneSample,
  getOutputModelTypeOneSampleAsUrl,
} from '../../src/meta/get-output-model-type';
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

describe(getOutputModelTypeMultipleSamples.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'sentiment-analysis',
    });
    expect(getOutputModelTypeMultipleSamples(endpoint)).toEqual(
      'ImageTextSentimentAnalysisOutputsMultipleSamples',
    );
  });
});

describe(getOutputModelTypeOneSample.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'sentiment-analysis',
    });
    expect(getOutputModelTypeOneSample(endpoint)).toEqual(
      'ImageTextSentimentAnalysisOutputsOneSample',
    );
  });
});

describe(getOutputModelTypeOneSampleAsUrl.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'background-removal',
    });
    expect(getOutputModelTypeOneSampleAsUrl(endpoint)).toEqual(
      'ImageTextBackgroundRemovalOutputsOneSampleAsUrl',
    );
  });
});

describe(getOutputModelTypeMultipleSamplesAsUrl.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'image',
      outputType: 'text',
      taskName: 'background-removal',
    });
    expect(getOutputModelTypeMultipleSamplesAsUrl(endpoint)).toEqual(
      'ImageTextBackgroundRemovalOutputsMultipleSamplesAsUrl',
    );
  });
});

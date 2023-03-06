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
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getOutputModelType(endpoint)).toEqual('AudioTextAudioTranscriptionOutputs');
  });
});

describe(getOutputModelTypeMultipleSamples.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getOutputModelTypeMultipleSamples(endpoint)).toEqual(
      'AudioTextAudioTranscriptionOutputsMultipleSamples',
    );
  });
});

describe(getOutputModelTypeOneSample.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getOutputModelTypeOneSample(endpoint)).toEqual(
      'AudioTextAudioTranscriptionOutputsOneSample',
    );
  });
});

describe(getOutputModelTypeOneSampleAsUrl.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getOutputModelTypeOneSampleAsUrl(endpoint)).toEqual(
      'AudioTextAudioTranscriptionOutputsOneSampleAsUrl',
    );
  });
});

describe(getOutputModelTypeMultipleSamplesAsUrl.name, () => {
  it('should format correctly', () => {
    const endpoint = p<EndpointDef>({
      inputType: 'audio',
      outputType: 'text',
      taskName: 'audio-transcription',
    });
    expect(getOutputModelTypeMultipleSamplesAsUrl(endpoint)).toEqual(
      'AudioTextAudioTranscriptionOutputsMultipleSamplesAsUrl',
    );
  });
});

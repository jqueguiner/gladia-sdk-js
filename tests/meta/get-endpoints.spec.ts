import { EndpointDef, getEndpoints, getEndpointsByInputOutput } from '../../src/meta';
import { isDefined } from '../../src/utils/fp';

describe(getEndpoints.name, () => {
  describe('surface validation', () => {
    it('should have no undefined values', () => {
      expect(getEndpoints().every(isDefined)).toBeTruthy();
    });
    describe('should have valid params for every endpoints', () => {
      for (const endpoint of getEndpoints()) {
        it(`for task ${endpoint.taskName}`, () => {
          expect(endpoint.params).toBeDefined();
          expect(endpoint.params).not.toHaveLength(0);
          for (const param of endpoint.params) {
            expect(param).toBeDefined();
            expect(['query', 'formData'].includes(param.in)).toBeTruthy();
            expect(param.type).toBeDefined();
            expect(param.type).not.toHaveLength(0);
            expect(typeof param.type).toEqual('string');
            expect(param.name).toBeDefined();
            expect(param.name).not.toHaveLength(0);
            expect(param.required).toBeDefined();
            expect(typeof param.required).toEqual('boolean');
          }
        });
      }
    });
    describe('should have valid outputBodyContentType for every endpoints', () => {
      for (const endpoint of getEndpoints()) {
        it(`for task ${endpoint.taskName}`, () => {
          expect(endpoint.outputBodyContentType).toBeDefined();
          expect(endpoint.outputBodyContentType.type).toBeDefined();
          expect(endpoint.outputBodyContentType.type).not.toHaveLength(0);
          if (endpoint.outputBodyContentType.type === 'prediction-standard-output') {
            expect(endpoint.outputBodyContentType.predictionType).toBeDefined();
            expect(endpoint.outputBodyContentType.predictionType).not.toHaveLength(0);
          }
        });
      }
    });
    describe('should have valid hasSamplesParam for every endpoints', () => {
      for (const endpoint of getEndpoints()) {
        it(`for task ${endpoint.taskName}`, () => {
          const hasSamplesParam = endpoint.params.some((p) => p.name === 'samples');
          expect(endpoint.hasSamplesParam).toBeDefined();
          expect(endpoint.hasSamplesParam).toBe(hasSamplesParam);
        });
      }
    });
    fieldSurfaceCheck({ field: 'defaultModel', type: 'string' });
    fieldSurfaceCheck({ field: 'inputBodyContentType', type: 'string' });
    fieldSurfaceCheck({ field: 'inputType', type: 'string' });
    fieldSurfaceCheck({ field: 'outputType', type: 'string' });
    fieldSurfaceCheck({ field: 'taskName', type: 'string' });
    fieldSurfaceCheck({ field: 'url', type: 'string' });
    fieldSurfaceCheck({ field: 'models', type: 'string_array', exception: ['super-resolution'] });
    type FieldSurfaceCheck = {
      field: keyof Omit<EndpointDef, 'outputBodyContentType' | 'hasSamplesParam'>;
      type: 'string_array' | 'string';
      exception?: string[];
    };
    function fieldSurfaceCheck({ field, type, exception = [] }: FieldSurfaceCheck) {
      describe(`should find a ${field} for every endpoints`, () => {
        for (const endpoint of getEndpoints()) {
          it(`for task ${endpoint.taskName}`, () => {
            expect(endpoint[field]).toBeDefined();
            if (!exception.includes(endpoint.taskName)) {
              expect(endpoint[field]).not.toHaveLength(0);
              switch (type) {
                case 'string':
                  expect(typeof endpoint[field]).toBe(type);
                  break;
                case 'string_array':
                  expect(typeof endpoint[field]).toBe('object');
                  for (const value of endpoint[field]) {
                    expect(value).toBeDefined();
                    expect(value).not.toHaveLength(0);
                  }
                  break;
              }
            }
          });
        }
      });
    }
  });

  describe('Specific Task', () => {
    // we do not wants to test everything only some specific tasks

    const toTests = [
      {
        url: '/audio/text/audio-transcription/',
        inputType: 'audio',
        outputType: 'text',
        taskName: 'audio-transcription',
        models: [
          'coqui_english_huge_vocab',
          'jasp--base',
          'jasp--large',
          'jasp--large-v1',
          'jasp--large-v2',
          'jasp--medium',
          'jasp--small',
          'jasp--tiny',
          'riva_default_asr',
        ],
        defaultModel: 'riva_default_asr',
        inputBodyContentType: 'multipart/form-data',
        outputBodyContentType: {
          type: 'prediction-standard-output',
          predictionType: 'string',
        },
        params: [
          {
            in: 'formData',
            type: 'audio',
            name: 'audio',
            required: false,
            example: 'http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav',
          },
          {
            in: 'formData',
            type: 'url',
            name: 'audio_url',
            required: false,
            example: 'http://files.gladia.io/examples/audio/text/audio-transcription/audio.wav',
          },
          {
            in: 'formData',
            type: 'string',
            name: 'language',
            required: true,
            example: 'en-US',
          },
        ],
        hasSamplesParam: false,
      },
      {
        url: '/text/text/sentiment-analysis/',
        inputType: 'text',
        outputType: 'text',
        taskName: 'sentiment-analysis',
        models: ['distilbert-base-uncased-finetuned-sst-2-english'],
        defaultModel: 'distilbert-base-uncased-finetuned-sst-2-english',
        inputBodyContentType: 'application/x-www-form-urlencoded',
        outputBodyContentType: {
          type: 'prediction-standard-output',
          predictionType: 'array',
        },
        params: [
          {
            in: 'formData',
            type: 'array',
            name: 'texts',
            required: true,
            example: ['I think you are a good person.', 'I think you are a bad person.'],
          },
        ],
        hasSamplesParam: false,
      },
      {
        url: '/image/image/background-removal/',
        inputType: 'image',
        outputType: 'image',
        taskName: 'background-removal',
        models: ['mobilenet', 'xception'],
        defaultModel: 'mobilenet',
        inputBodyContentType: 'multipart/form-data',
        outputBodyContentType: {
          type: 'binary',
        },
        params: [
          {
            in: 'formData',
            type: 'image',
            name: 'image',
            required: false,
            example: 'http://files.gladia.io/examples/image/image/background-removal/owl2.png',
          },
          {
            in: 'formData',
            type: 'url',
            name: 'image_url',
            required: false,
            example: 'http://files.gladia.io/examples/image/image/background-removal/owl2.png',
          },
        ],
        hasSamplesParam: false,
      },
      {
        url: '/text/image/image-generation/',
        inputType: 'text',
        outputType: 'image',
        taskName: 'image-generation',
        models: [
          'dream-studio',
          'stable-diffusion--compvis-sd-14',
          'stable-diffusion--runwayml-sd-15',
          'stable-diffusion--stabilityai-sd-20',
          'stable-diffusion--stabilityai-sd-21',
        ],
        defaultModel: 'stable-diffusion--stabilityai-sd-21',
        inputBodyContentType: 'application/x-www-form-urlencoded',
        outputBodyContentType: {
          type: 'binary',
        },
        params: [
          {
            in: 'formData',
            type: 'string',
            name: 'prompt',
            required: true,
            example: 'The Eiffel tower landing on the moon, unreal engine.',
          },
          {
            in: 'formData',
            type: 'integer',
            name: 'samples',
            required: false,
            example: 1,
          },
          {
            in: 'formData',
            type: 'integer',
            name: 'steps',
            required: false,
            example: 40,
          },
          {
            in: 'formData',
            type: 'integer',
            name: 'seed',
            required: false,
            example: 424242,
          },
        ],
        hasSamplesParam: true,
      },
    ];
    toTests.forEach((expectedDef) => {
      describe(expectedDef.taskName, () => {
        it('should have a valid endpoint definition', () => {
          const def = getEndpoints().filter((e) => e.url === expectedDef.url)[0];
          expect(def).toBeDefined();
          expect(def).toEqual(expectedDef);
        });
      });
    });
  });
});

describe(getEndpointsByInputOutput.name, () => {
  it('should get every endpoints tidy in input/output', () => {
    let allEndpoints = getEndpoints();
    const endpointsByInputOutput = getEndpointsByInputOutput();
    for (const [, inputEndpoints] of Object.entries(endpointsByInputOutput)) {
      for (const [, outputEndpoints] of Object.entries(inputEndpoints)) {
        for (const endpoint of outputEndpoints) {
          const beforeFilterCount = allEndpoints.length;
          allEndpoints = allEndpoints.filter((e) => e.url !== endpoint.url);
          const afterFilterCount = allEndpoints.length;
          if (beforeFilterCount === afterFilterCount) {
            fail(`Cannot find endpoint ${endpoint.url} in the result of ${getEndpoints.name}`);
          }
        }
      }
    }
    expect(allEndpoints).toHaveLength(0);
  });

  it('should have only once every endpoints', () => {
    const allEndpoints = getEndpoints();
    const endpointsByInputOutput = Object.values(getEndpointsByInputOutput())
      .flatMap((inputEndpoints) => Object.values(inputEndpoints))
      .flatMap((ee) => ee);
    expect(allEndpoints).toHaveLength(endpointsByInputOutput.length);
  });
});

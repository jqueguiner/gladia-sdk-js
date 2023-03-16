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
          if (endpoint.outputBodyContentType.type === 'prediction-standard-output') {
            expect(endpoint.outputBodyContentType.predictionType).toBeDefined();
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
        models: ['large-v2', 'medium'],
        defaultModel: 'large-v2',
        inputBodyContentType: 'multipart/form-data',
        outputBodyContentType: {
          type: 'prediction-standard-output',
          predictionType: {
            array: 'object',
          },
        },
        params: [
          {
            in: 'formData',
            type: 'audio',
            name: 'audio',
            example: 'http://files.gladia.io/example/audio-transcription/split_infinity.wav',
            required: false,
          },
          {
            in: 'formData',
            type: 'url',
            name: 'audio_url',
            example: 'http://files.gladia.io/example/audio-transcription/split_infinity.wav',
            required: false,
          },
          {
            in: 'formData',
            type: 'enum',
            name: 'language_behaviour',
            example: 'automatic single language',
            required: false,
            enumValues: ['manual', 'automatic single language', 'automatic multiple languages'],
          },
          {
            in: 'formData',
            type: 'enum',
            name: 'language',
            example: 'english',
            required: false,
            enumValues: [
              'afrikaans',
              'albanian',
              'amharic',
              'arabic',
              'armenian',
              'assamese',
              'azerbaijani',
              'bashkir',
              'basque',
              'belarusian',
              'bengali',
              'bosnian',
              'breton',
              'bulgarian',
              'catalan',
              'chinese',
              'croatian',
              'czech',
              'danish',
              'dutch',
              'english',
              'estonian',
              'faroese',
              'finnish',
              'french',
              'galician',
              'georgian',
              'german',
              'greek',
              'gujarati',
              'haitian creole',
              'hausa',
              'hawaiian',
              'hebrew',
              'hindi',
              'hungarian',
              'icelandic',
              'indonesian',
              'italian',
              'japanese',
              'javanese',
              'kannada',
              'kazakh',
              'khmer',
              'korean',
              'lao',
              'latin',
              'latvian',
              'lingala',
              'lithuanian',
              'luxembourgish',
              'macedonian',
              'malagasy',
              'malay',
              'malayalam',
              'maltese',
              'maori',
              'marathi',
              'mongolian',
              'myanmar',
              'nepali',
              'norwegian',
              'nynorsk',
              'occitan',
              'pashto',
              'persian',
              'polish',
              'portuguese',
              'punjabi',
              'romanian',
              'russian',
              'sanskrit',
              'serbian',
              'shona',
              'sindhi',
              'sinhala',
              'slovak',
              'slovenian',
              'somali',
              'spanish',
              'sundanese',
              'swahili',
              'swedish',
              'tagalog',
              'tajik',
              'tamil',
              'tatar',
              'telugu',
              'thai',
              'tibetan',
              'turkish',
              'turkmen',
              'ukrainian',
              'urdu',
              'uzbek',
              'vietnamese',
              'welsh',
              'wolof',
              'yiddish',
              'yoruba',
            ],
          },
          {
            in: 'formData',
            type: 'boolean',
            name: 'toggle_noise_reduction',
            example: false,
            required: false,
          },
          {
            in: 'formData',
            type: 'string',
            name: 'initial_prompt',
            example: '',
            required: false,
          },
          {
            in: 'formData',
            type: 'boolean',
            name: 'toggle_diarization',
            example: false,
            required: false,
          },
          {
            in: 'formData',
            type: 'boolean',
            name: 'toggle_summarization',
            example: false,
            required: false,
          },
          {
            in: 'formData',
            type: 'enum',
            name: 'output_format',
            example: 'json',
            required: false,
            enumValues: ['json', 'srt', 'vtt', 'txt', 'plain'],
          },
        ],
        hasSamplesParam: false,
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

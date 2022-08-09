/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import gladia from '../index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomInt, getRandomText, mockHttpClient } from './helpers/mocks';

describe('FromTextToText', () => {
  describe('autocorrect', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().autocorrect({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/autocorrect/',
          query: {
            model: 'flexudy-t5-base-multi-sentence-doctor',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().autocorrect({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/autocorrect/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.autocorrect({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/autocorrect/',
          query: {
            model: 'flexudy-t5-base-multi-sentence-doctor',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.autocorrect({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/autocorrect/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
  });

  describe('emotionRecognition', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().emotionRecognition({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/emotion-recognition/',
          query: {
            model: 'mrm8488-t5-base-finetuned-emotion',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().emotionRecognition({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/emotion-recognition/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.emotionRecognition({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/emotion-recognition/',
          query: {
            model: 'mrm8488-t5-base-finetuned-emotion',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.emotionRecognition({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/emotion-recognition/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
  });

  describe('hateSpeechDetection', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().hateSpeechDetection({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/hate-speech-detection/',
          query: {
            model: 'Hate-speech-CNERG-dehatebert-mono-english',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().hateSpeechDetection({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/hate-speech-detection/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.hateSpeechDetection({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/hate-speech-detection/',
          query: {
            model: 'Hate-speech-CNERG-dehatebert-mono-english',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.hateSpeechDetection({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/hate-speech-detection/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
  });

  describe('keywordExtraction', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().keywordExtraction({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/keyword-extraction/',
          query: {
            model: 'keybert-paraphrase-MiniLM-L6-v2',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().keywordExtraction({
          model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/keyword-extraction/',
          query: {
            model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.keywordExtraction({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/keyword-extraction/',
          query: {
            model: 'keybert-paraphrase-MiniLM-L6-v2',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.keywordExtraction({
          model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/keyword-extraction/',
          query: {
            model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
          },
        });
      });
    });
  });

  describe('languageDetection', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().languageDetection({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-detection/',
          query: {
            model: 'xlm-roberta-base-language-detection',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().languageDetection({
          model: 'toftrup-etal-2021' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-detection/',
          query: {
            model: 'toftrup-etal-2021' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.languageDetection({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-detection/',
          query: {
            model: 'xlm-roberta-base-language-detection',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.languageDetection({
          model: 'toftrup-etal-2021' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-detection/',
          query: {
            model: 'toftrup-etal-2021' as any,
          },
        });
      });
    });
  });

  describe('languageGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().languageGeneration({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-generation/',
          query: {
            model: 'EleutherAI-gpt-neo-2_7B',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().languageGeneration({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-generation/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.languageGeneration({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-generation/',
          query: {
            model: 'EleutherAI-gpt-neo-2_7B',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.languageGeneration({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-generation/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
  });

  describe('namedEntityRecognition', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().namedEntityRecognition({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/named-entity-recognition/',
          query: {
            model: 'dbmdz-bert-large-cased-finetuned-conll03-english',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().namedEntityRecognition({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/named-entity-recognition/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.namedEntityRecognition({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/named-entity-recognition/',
          query: {
            model: 'dbmdz-bert-large-cased-finetuned-conll03-english',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.namedEntityRecognition({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/named-entity-recognition/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
  });

  describe('nextSentencePrediction', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-sentence-prediction/',
          query: {
            model: 'bert-base-uncased',
            sentence_1: sentence_1_data,
            sentence_2: sentence_2_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-sentence-prediction/',
          query: {
            model: 'fake-model-name' as any,
            sentence_1: sentence_1_data,
            sentence_2: sentence_2_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-sentence-prediction/',
          query: {
            model: 'bert-base-uncased',
            sentence_1: sentence_1_data,
            sentence_2: sentence_2_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-sentence-prediction/',
          query: {
            model: 'fake-model-name' as any,
            sentence_1: sentence_1_data,
            sentence_2: sentence_2_data,
          },
        });
      });
    });
  });

  describe('nextWordPrediction', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().nextWordPrediction({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-word-prediction/',
          query: {
            model: 'distilbert-base-uncased',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().nextWordPrediction({
          model: 'albert-base-v2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-word-prediction/',
          query: {
            model: 'albert-base-v2' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.nextWordPrediction({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-word-prediction/',
          query: {
            model: 'distilbert-base-uncased',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.nextWordPrediction({
          model: 'albert-base-v2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-word-prediction/',
          query: {
            model: 'albert-base-v2' as any,
          },
        });
      });
    });
  });

  describe('plural', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const word_data = getRandomText();
        const count_data = getRandomText();
        const result = await gladiaClient.fromText().toText().plural({
          word: word_data,
          count: count_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/plural/',
          query: {
            model: 'inflect',
            word: word_data,
            count: count_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const word_data = getRandomText();
        const count_data = getRandomText();
        const result = await gladiaClient.fromText().toText().plural({
          word: word_data,
          count: count_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/plural/',
          query: {
            model: 'fake-model-name' as any,
            word: word_data,
            count: count_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const word_data = getRandomText();
        const count_data = getRandomText();
        const result = await gladiaClient.plural({
          word: word_data,
          count: count_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/plural/',
          query: {
            model: 'inflect',
            word: word_data,
            count: count_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const word_data = getRandomText();
        const count_data = getRandomText();
        const result = await gladiaClient.plural({
          word: word_data,
          count: count_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/plural/',
          query: {
            model: 'fake-model-name' as any,
            word: word_data,
            count: count_data,
          },
        });
      });
    });
  });

  describe('programmingLanguageGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().programmingLanguageGeneration({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/programming-language-generation/',
          query: {
            model: 'sentdex-GPyT',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().programmingLanguageGeneration({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/programming-language-generation/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.programmingLanguageGeneration({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/programming-language-generation/',
          query: {
            model: 'sentdex-GPyT',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.programmingLanguageGeneration({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/programming-language-generation/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
  });

  describe('questionAnswering', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const result = await gladiaClient.fromText().toText().questionAnswering({
          context: context_data,
          question: question_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/question-answering/',
          query: {
            model: 'deepset_bert-base-cased-squad2',
            context: context_data,
            question: question_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const result = await gladiaClient.fromText().toText().questionAnswering({
          context: context_data,
          question: question_data,
          model: 'deepset-roberta-base-squad2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/question-answering/',
          query: {
            model: 'deepset-roberta-base-squad2' as any,
            context: context_data,
            question: question_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const result = await gladiaClient.questionAnswering({
          context: context_data,
          question: question_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/question-answering/',
          query: {
            model: 'deepset_bert-base-cased-squad2',
            context: context_data,
            question: question_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const result = await gladiaClient.questionAnswering({
          context: context_data,
          question: question_data,
          model: 'deepset-roberta-base-squad2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/question-answering/',
          query: {
            model: 'deepset-roberta-base-squad2' as any,
            context: context_data,
            question: question_data,
          },
        });
      });
    });
  });

  describe('sentenceParaphraser', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().sentenceParaphraser({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentence-paraphraser/',
          query: {
            model: 'ramsrigouthamg-t5-large-paraphraser-diverse-high-quality',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().sentenceParaphraser({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentence-paraphraser/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.sentenceParaphraser({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentence-paraphraser/',
          query: {
            model: 'ramsrigouthamg-t5-large-paraphraser-diverse-high-quality',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.sentenceParaphraser({
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentence-paraphraser/',
          query: {
            model: 'fake-model-name' as any,
          },
        });
      });
    });
  });

  describe('sentimentAnalysis', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.fromText().toText().sentimentAnalysis({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentiment-analysis/',
          query: {
            model: 'nlptown-bert-base-multilingual-uncased-sentiment',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.fromText().toText().sentimentAnalysis({
          model: 'distilbert-base-uncased' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentiment-analysis/',
          query: {
            model: 'distilbert-base-uncased' as any,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient.sentimentAnalysis({
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentiment-analysis/',
          query: {
            model: 'nlptown-bert-base-multilingual-uncased-sentiment',
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient.sentimentAnalysis({
          model: 'distilbert-base-uncased' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentiment-analysis/',
          query: {
            model: 'distilbert-base-uncased' as any,
          },
        });
      });
    });
  });

  describe('similarity', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/similarity/',
          query: {
            model: 'all-MiniLM-L6-v2',
            sentence_1: sentence_1_data,
            sentence_2: sentence_2_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/similarity/',
          query: {
            model: 'fake-model-name' as any,
            sentence_1: sentence_1_data,
            sentence_2: sentence_2_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/similarity/',
          query: {
            model: 'all-MiniLM-L6-v2',
            sentence_1: sentence_1_data,
            sentence_2: sentence_2_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/similarity/',
          query: {
            model: 'fake-model-name' as any,
            sentence_1: sentence_1_data,
            sentence_2: sentence_2_data,
          },
        });
      });
    });
  });

  describe('wordAlignment', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/word-alignment/',
          query: {
            model: 'bert-base-multilingual-cased',
            input_string_language_1: input_string_language_1_data,
            input_string_language_2: input_string_language_2_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/word-alignment/',
          query: {
            model: 'fake-model-name' as any,
            input_string_language_1: input_string_language_1_data,
            input_string_language_2: input_string_language_2_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        const result = await gladiaClient.wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/word-alignment/',
          query: {
            model: 'bert-base-multilingual-cased',
            input_string_language_1: input_string_language_1_data,
            input_string_language_2: input_string_language_2_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        const result = await gladiaClient.wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/word-alignment/',
          query: {
            model: 'fake-model-name' as any,
            input_string_language_1: input_string_language_1_data,
            input_string_language_2: input_string_language_2_data,
          },
        });
      });
    });
  });

});
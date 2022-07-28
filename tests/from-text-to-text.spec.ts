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
        const sentence_data = getRandomText();
        const result = await gladiaClient.fromText().toText().autocorrect({
          sentence: sentence_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/autocorrect/',
          query: {
            model: 'flexudy-t5-base-multi-sentence-doctor',
            sentence: sentence_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.fromText().toText().autocorrect({
          sentence: sentence_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/autocorrect/',
          query: {
            model: 'fake-model-name' as any,
            sentence: sentence_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.autocorrect({
          sentence: sentence_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/autocorrect/',
          query: {
            model: 'flexudy-t5-base-multi-sentence-doctor',
            sentence: sentence_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.autocorrect({
          sentence: sentence_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/autocorrect/',
          query: {
            model: 'fake-model-name' as any,
            sentence: sentence_data,
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
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().emotionRecognition({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/emotion-recognition/',
          query: {
            model: 'mrm8488-t5-base-finetuned-emotion',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().emotionRecognition({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/emotion-recognition/',
          query: {
            model: 'fake-model-name' as any,
            text: text_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.emotionRecognition({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/emotion-recognition/',
          query: {
            model: 'mrm8488-t5-base-finetuned-emotion',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.emotionRecognition({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/emotion-recognition/',
          query: {
            model: 'fake-model-name' as any,
            text: text_data,
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
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().hateSpeechDetection({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/hate-speech-detection/',
          query: {
            model: 'Hate-speech-CNERG-dehatebert-mono-english',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().hateSpeechDetection({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/hate-speech-detection/',
          query: {
            model: 'fake-model-name' as any,
            text: text_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.hateSpeechDetection({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/hate-speech-detection/',
          query: {
            model: 'Hate-speech-CNERG-dehatebert-mono-english',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.hateSpeechDetection({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/hate-speech-detection/',
          query: {
            model: 'fake-model-name' as any,
            text: text_data,
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
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().keywordExtraction({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/keyword-extraction/',
          query: {
            model: 'keybert-paraphrase-MiniLM-L6-v2',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().keywordExtraction({
          text: text_data,
          model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/keyword-extraction/',
          query: {
            model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
            text: text_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.keywordExtraction({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/keyword-extraction/',
          query: {
            model: 'keybert-paraphrase-MiniLM-L6-v2',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.keywordExtraction({
          text: text_data,
          model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/keyword-extraction/',
          query: {
            model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
            text: text_data,
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
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().languageDetection({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-detection/',
          query: {
            model: 'toftrup-etal-2021',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().languageDetection({
          text: text_data,
          model: 'xlm-roberta-base-language-detection' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-detection/',
          query: {
            model: 'xlm-roberta-base-language-detection' as any,
            text: text_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.languageDetection({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-detection/',
          query: {
            model: 'toftrup-etal-2021',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.languageDetection({
          text: text_data,
          model: 'xlm-roberta-base-language-detection' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-detection/',
          query: {
            model: 'xlm-roberta-base-language-detection' as any,
            text: text_data,
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
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().languageGeneration({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-generation/',
          query: {
            model: 'EleutherAI-gpt-neo-2_7B',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().languageGeneration({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-generation/',
          query: {
            model: 'fake-model-name' as any,
            text: text_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.languageGeneration({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-generation/',
          query: {
            model: 'EleutherAI-gpt-neo-2_7B',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.languageGeneration({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/language-generation/',
          query: {
            model: 'fake-model-name' as any,
            text: text_data,
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
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().namedEntityRecognition({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/named-entity-recognition/',
          query: {
            model: 'dbmdz-bert-large-cased-finetuned-conll03-english',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().namedEntityRecognition({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/named-entity-recognition/',
          query: {
            model: 'fake-model-name' as any,
            text: text_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.namedEntityRecognition({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/named-entity-recognition/',
          query: {
            model: 'dbmdz-bert-large-cased-finetuned-conll03-english',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.namedEntityRecognition({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/named-entity-recognition/',
          query: {
            model: 'fake-model-name' as any,
            text: text_data,
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
        const sentence_data = getRandomText();
        const result = await gladiaClient.fromText().toText().nextWordPrediction({
          sentence: sentence_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-word-prediction/',
          query: {
            model: 'distilbert-base-uncased',
            sentence: sentence_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.fromText().toText().nextWordPrediction({
          sentence: sentence_data,
          model: 'albert-base-v2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-word-prediction/',
          query: {
            model: 'albert-base-v2' as any,
            sentence: sentence_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.nextWordPrediction({
          sentence: sentence_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-word-prediction/',
          query: {
            model: 'distilbert-base-uncased',
            sentence: sentence_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.nextWordPrediction({
          sentence: sentence_data,
          model: 'albert-base-v2' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/next-word-prediction/',
          query: {
            model: 'albert-base-v2' as any,
            sentence: sentence_data,
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
        const count_data = getRandomInt();
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
        const count_data = getRandomInt();
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
        const count_data = getRandomInt();
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
        const count_data = getRandomInt();
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
        const code_snippet_data = getRandomText();
        const result = await gladiaClient.fromText().toText().programmingLanguageGeneration({
          code_snippet: code_snippet_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/programming-language-generation/',
          query: {
            model: 'sentdex-GPyT',
            code_snippet: code_snippet_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const code_snippet_data = getRandomText();
        const result = await gladiaClient.fromText().toText().programmingLanguageGeneration({
          code_snippet: code_snippet_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/programming-language-generation/',
          query: {
            model: 'fake-model-name' as any,
            code_snippet: code_snippet_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const code_snippet_data = getRandomText();
        const result = await gladiaClient.programmingLanguageGeneration({
          code_snippet: code_snippet_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/programming-language-generation/',
          query: {
            model: 'sentdex-GPyT',
            code_snippet: code_snippet_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const code_snippet_data = getRandomText();
        const result = await gladiaClient.programmingLanguageGeneration({
          code_snippet: code_snippet_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/programming-language-generation/',
          query: {
            model: 'fake-model-name' as any,
            code_snippet: code_snippet_data,
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
        const context_data = getRandomText();
        const result = await gladiaClient.fromText().toText().sentenceParaphraser({
          context: context_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentence-paraphraser/',
          query: {
            model: 'ramsrigouthamg-t5-large-paraphraser-diverse-high-quality',
            context: context_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const result = await gladiaClient.fromText().toText().sentenceParaphraser({
          context: context_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentence-paraphraser/',
          query: {
            model: 'fake-model-name' as any,
            context: context_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        const result = await gladiaClient.sentenceParaphraser({
          context: context_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentence-paraphraser/',
          query: {
            model: 'ramsrigouthamg-t5-large-paraphraser-diverse-high-quality',
            context: context_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const result = await gladiaClient.sentenceParaphraser({
          context: context_data,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentence-paraphraser/',
          query: {
            model: 'fake-model-name' as any,
            context: context_data,
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
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().sentimentAnalysis({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentiment-analysis/',
          query: {
            model: 'distilbert-base-uncased-finetuned-sst-2-english',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().sentimentAnalysis({
          text: text_data,
          model: 'distilbert-base-uncased' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentiment-analysis/',
          query: {
            model: 'distilbert-base-uncased' as any,
            text: text_data,
          },
        });
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.sentimentAnalysis({
          text: text_data,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentiment-analysis/',
          query: {
            model: 'distilbert-base-uncased-finetuned-sst-2-english',
            text: text_data,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.sentimentAnalysis({
          text: text_data,
          model: 'distilbert-base-uncased' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url: '/text/text/sentiment-analysis/',
          query: {
            model: 'distilbert-base-uncased' as any,
            text: text_data,
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
import { GladiaClient } from 'src/gladia-client';
import gladia from '../index';
import { FromTextToText } from '../src/from-text-to-text';
import { HttpClient } from '../src/http-client';
import {
  TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
  TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
  TEXT_TEXT_ENTITY_EXTRACTION_DEFAULT_MODEL,
  TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
  TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
  TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
  TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
  TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
  TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
  TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
  TEXT_TEXT_PLURAL_DEFAULT_MODEL,
  TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
  TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
  TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
  TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
  TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
  TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
} from '../src/models';
import { mockHttpClient } from './mock.spec';

describe(FromTextToText.name, () => {
  testSuite({
    method: 'autocorrect',
    url: '/text/text/autocorrect/',
    defaultModel: TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
  });
  testSuite({
    method: 'emotionRecognition',
    url: '/text/text/emotion-recognition/',
    defaultModel: TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'entityExtraction',
    url: '/text/text/entity-extraction/',
    defaultModel: TEXT_TEXT_ENTITY_EXTRACTION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'hateSpeechDetection',
    url: '/text/text/hate-speech-detection/',
    defaultModel: TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'keywordExtraction',
    url: '/text/text/keyword-extraction/',
    defaultModel: TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'languageDetection',
    url: '/text/text/language-detection/',
    defaultModel: TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'languageGeneration',
    url: '/text/text/language-generation/',
    defaultModel: TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'namedEntityRecognition',
    url: '/text/text/named-entity-recognition/',
    defaultModel: TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
  });

  testSuite({
    method: 'nextSentencePrediction',
    url: '/text/text/next-sentence-prediction/',
    defaultModel: TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'nextWordPrediction',
    url: '/text/text/next-word-prediction/',
    defaultModel: TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'plural',
    url: '/text/text/plural/',
    defaultModel: TEXT_TEXT_PLURAL_DEFAULT_MODEL,
  });
  testSuite({
    method: 'programmingLanguageGeneration',
    url: '/text/text/programming-language-generation/',
    defaultModel: TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'questionAnswering',
    url: '/text/text/question-answering/',
    defaultModel: TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
  });
  testSuite({
    method: 'sentenceParaphraser',
    url: '/text/text/sentence-paraphraser/',
    defaultModel: TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
  });
  testSuite({
    method: 'sentimentAnalysis',
    url: '/text/text/sentiment-analysis/',
    defaultModel: TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
  });
  testSuite({
    method: 'similarity',
    url: '/text/text/similarity/',
    defaultModel: TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
  });
  testSuite({
    method: 'wordAlignment',
    url: '/text/text/word-alignment/',
    defaultModel: TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
  });
});

type TestSuite = {
  method: keyof typeof FromTextToText.prototype;
  url: string;
  defaultModel: string;
};
function testSuite({ method, url, defaultModel }: TestSuite) {
  describe(method, () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    it('should call the api with the text and the default model by default', async () => {
      const result = await gladiaClient.fromText().toText()[method]({ text: 'this is a text' });
      expect(result).toBeDefined();
      expect(httpClientMock.post).toHaveBeenCalledTimes(1);
      expect(httpClientMock.post).toHaveBeenCalledWith({
        url,
        query: {
          text: 'this is a text',
          model: defaultModel,
        },
      });
    });
    it('should call the api with the text and the specified model', async () => {
      const result = await gladiaClient
        .fromText()
        .toText()
        [method]({ text: 'this is a text', model: 'custom-model' } as any);
      expect(result).toBeDefined();
      expect(httpClientMock.post).toHaveBeenCalledTimes(1);
      expect(httpClientMock.post).toHaveBeenCalledWith({
        url,
        query: {
          text: 'this is a text',
          model: 'custom-model',
        },
      });
    });

    describe('shortcut', () => {
      it('should call the api with the text and the default model by default', async () => {
        const result = await gladiaClient[method]({ text: 'this is a text' });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url,
          query: {
            text: 'this is a text',
            model: defaultModel,
          },
        });
      });
      it('should call the api with the text and the specified model', async () => {
        const result = await gladiaClient[method]({
          text: 'this is a text',
          model: 'custom-model',
        } as any);
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        expect(httpClientMock.post).toHaveBeenCalledWith({
          url,
          query: {
            text: 'this is a text',
            model: 'custom-model',
          },
        });
      });
    });
  });
}

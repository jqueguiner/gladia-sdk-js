/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomArray, getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromTextToText', () => {
  describe('adGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const keywords_data = getRandomArray();
        const result = await gladiaClient.fromText().toText().adGeneration({
          keywords: keywords_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/ad-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('keywords')).toEqual(keywords_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const keywords_data = getRandomArray();
        const result = await gladiaClient.fromText().toText().adGeneration({
          keywords: keywords_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/ad-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('keywords')).toEqual(keywords_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const keywords_data = getRandomArray();
        const result = await gladiaClient.adGeneration({
          keywords: keywords_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/ad-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('keywords')).toEqual(keywords_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const keywords_data = getRandomArray();
        const result = await gladiaClient.adGeneration({
          keywords: keywords_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/ad-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('keywords')).toEqual(keywords_data);
      });
    });
  });

  describe('articleGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const title_data = getRandomText();
        const result = await gladiaClient.fromText().toText().articleGeneration({
          title: title_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/article-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('title')).toEqual(title_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const title_data = getRandomText();
        const result = await gladiaClient.fromText().toText().articleGeneration({
          title: title_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/article-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('title')).toEqual(title_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const title_data = getRandomText();
        const result = await gladiaClient.articleGeneration({
          title: title_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/article-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('title')).toEqual(title_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const title_data = getRandomText();
        const result = await gladiaClient.articleGeneration({
          title: title_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/article-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('title')).toEqual(title_data);
      });
    });
  });

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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/autocorrect/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.fromText().toText().autocorrect({
          sentence: sentence_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/autocorrect/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.autocorrect({
          sentence: sentence_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/autocorrect/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const result = await gladiaClient.autocorrect({
          sentence: sentence_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/autocorrect/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
    });
  });

  describe('bulletPointGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().bulletPointGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/bullet-point-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().bulletPointGeneration({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/bullet-point-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.bulletPointGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/bullet-point-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.bulletPointGeneration({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/bullet-point-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/emotion-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().emotionRecognition({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/emotion-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.emotionRecognition({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/emotion-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.emotionRecognition({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/emotion-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().hateSpeechDetection({
          text: text_data,
          model: 'Hate-speech-CNERG-dehatebert-mono-english' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'Hate-speech-CNERG-dehatebert-mono-english',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.hateSpeechDetection({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.hateSpeechDetection({
          text: text_data,
          model: 'Hate-speech-CNERG-dehatebert-mono-english' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'Hate-speech-CNERG-dehatebert-mono-english',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('headlineGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().headlineGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/headline-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().headlineGeneration({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/headline-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.headlineGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/headline-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.headlineGeneration({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/headline-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('intentClassification', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().intentClassification({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/intent-classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().intentClassification({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/intent-classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.intentClassification({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/intent-classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.intentClassification({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/intent-classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
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
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromText().toText().keywordExtraction({
          text: text_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/keyword-extraction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromText().toText().keywordExtraction({
          text: text_data,
          top_k: top_k_data,
          model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/keyword-extraction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.keywordExtraction({
          text: text_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/keyword-extraction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.keywordExtraction({
          text: text_data,
          top_k: top_k_data,
          model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/keyword-extraction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'keybert-paraphrase-multilingual-MiniLM-L12-v2',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().languageDetection({
          text: text_data,
          model: 'toftrup-etal-2021' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'toftrup-etal-2021',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.languageDetection({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.languageDetection({
          text: text_data,
          model: 'toftrup-etal-2021' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'toftrup-etal-2021',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().languageGeneration({
          text: text_data,
          model: 'EleutherAI-gpt-neo-2_7B' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'EleutherAI-gpt-neo-2_7B',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.languageGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.languageGeneration({
          text: text_data,
          model: 'EleutherAI-gpt-neo-2_7B' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'EleutherAI-gpt-neo-2_7B',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/named-entity-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().namedEntityRecognition({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/named-entity-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.namedEntityRecognition({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/named-entity-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.namedEntityRecognition({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/named-entity-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-sentence-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-sentence-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-sentence-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-sentence-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
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
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromText().toText().nextWordPrediction({
          sentence: sentence_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromText().toText().nextWordPrediction({
          sentence: sentence_data,
          top_k: top_k_data,
          model: 'albert-base-v2' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'albert-base-v2',
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.nextWordPrediction({
          sentence: sentence_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.nextWordPrediction({
          sentence: sentence_data,
          top_k: top_k_data,
          model: 'albert-base-v2' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'albert-base-v2',
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/plural/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('word')).toEqual(word_data);
        expect(firstCallBody.get('count')).toEqual(String(count_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const word_data = getRandomText();
        const count_data = getRandomInt();
        const result = await gladiaClient.fromText().toText().plural({
          word: word_data,
          count: count_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/plural/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('word')).toEqual(word_data);
        expect(firstCallBody.get('count')).toEqual(String(count_data));
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/plural/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('word')).toEqual(word_data);
        expect(firstCallBody.get('count')).toEqual(String(count_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const word_data = getRandomText();
        const count_data = getRandomInt();
        const result = await gladiaClient.plural({
          word: word_data,
          count: count_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/plural/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('word')).toEqual(word_data);
        expect(firstCallBody.get('count')).toEqual(String(count_data));
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/programming-language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('code_snippet')).toEqual(code_snippet_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const code_snippet_data = getRandomText();
        const result = await gladiaClient.fromText().toText().programmingLanguageGeneration({
          code_snippet: code_snippet_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/programming-language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('code_snippet')).toEqual(code_snippet_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const code_snippet_data = getRandomText();
        const result = await gladiaClient.programmingLanguageGeneration({
          code_snippet: code_snippet_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/programming-language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('code_snippet')).toEqual(code_snippet_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const code_snippet_data = getRandomText();
        const result = await gladiaClient.programmingLanguageGeneration({
          code_snippet: code_snippet_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/programming-language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('code_snippet')).toEqual(code_snippet_data);
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
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromText().toText().questionAnswering({
          context: context_data,
          question: question_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromText().toText().questionAnswering({
          context: context_data,
          question: question_data,
          top_k: top_k_data,
          model: 'deepset-roberta-base-squad2' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'deepset-roberta-base-squad2',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.questionAnswering({
          context: context_data,
          question: question_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.questionAnswering({
          context: context_data,
          question: question_data,
          top_k: top_k_data,
          model: 'deepset-roberta-base-squad2' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'deepset-roberta-base-squad2',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentence-paraphraser/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const result = await gladiaClient.fromText().toText().sentenceParaphraser({
          context: context_data,
          model: 'ramsrigouthamg-t5_sentence_paraphraser' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentence-paraphraser/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'ramsrigouthamg-t5_sentence_paraphraser',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        const result = await gladiaClient.sentenceParaphraser({
          context: context_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentence-paraphraser/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const result = await gladiaClient.sentenceParaphraser({
          context: context_data,
          model: 'ramsrigouthamg-t5_sentence_paraphraser' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentence-paraphraser/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'ramsrigouthamg-t5_sentence_paraphraser',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().sentimentAnalysis({
          text: text_data,
          model: 'distilbert-base-uncased' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'distilbert-base-uncased',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.sentimentAnalysis({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.sentimentAnalysis({
          text: text_data,
          model: 'distilbert-base-uncased' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'distilbert-base-uncased',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/similarity/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/similarity/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/similarity/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        const result = await gladiaClient.similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/similarity/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
    });
  });

  describe('summarization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().summarization({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.fromText().toText().summarization({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.summarization({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const result = await gladiaClient.summarization({
          text: text_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('translation', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const source_data = getRandomText();
        const target_data = getRandomText();
        const result = await gladiaClient.fromText().toText().translation({
          text: text_data,
          source: source_data,
          target: target_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('source')).toEqual(source_data);
        expect(firstCallBody.get('target')).toEqual(target_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const source_data = getRandomText();
        const target_data = getRandomText();
        const result = await gladiaClient.fromText().toText().translation({
          text: text_data,
          source: source_data,
          target: target_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('source')).toEqual(source_data);
        expect(firstCallBody.get('target')).toEqual(target_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const source_data = getRandomText();
        const target_data = getRandomText();
        const result = await gladiaClient.translation({
          text: text_data,
          source: source_data,
          target: target_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('source')).toEqual(source_data);
        expect(firstCallBody.get('target')).toEqual(target_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const source_data = getRandomText();
        const target_data = getRandomText();
        const result = await gladiaClient.translation({
          text: text_data,
          source: source_data,
          target: target_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('source')).toEqual(source_data);
        expect(firstCallBody.get('target')).toEqual(target_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/word-alignment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('input_string_language_1')).toEqual(input_string_language_1_data);
        expect(firstCallBody.get('input_string_language_2')).toEqual(input_string_language_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        const result = await gladiaClient.fromText().toText().wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/word-alignment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('input_string_language_1')).toEqual(input_string_language_1_data);
        expect(firstCallBody.get('input_string_language_2')).toEqual(input_string_language_2_data);
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
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/word-alignment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('input_string_language_1')).toEqual(input_string_language_1_data);
        expect(firstCallBody.get('input_string_language_2')).toEqual(input_string_language_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        const result = await gladiaClient.wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/word-alignment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('input_string_language_1')).toEqual(input_string_language_1_data);
        expect(firstCallBody.get('input_string_language_2')).toEqual(input_string_language_2_data);
      });
    });
  });

});
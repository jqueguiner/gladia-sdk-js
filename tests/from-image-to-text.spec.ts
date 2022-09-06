/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromImageToText', () => {
  describe('asciify', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toText().asciify({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/asciify/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toText().asciify({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/asciify/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.asciify({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/asciify/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.asciify({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/asciify/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

  describe('classification', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromImage().toText().classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromImage().toText().classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
          model: 'convnext_base' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'convnext_base',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
          model: 'convnext_base' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'convnext_base',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
  });

  describe('ocr', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const source_language_data = getRandomText();
        const result = await gladiaClient.fromImage().toText().ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/ocr/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const source_language_data = getRandomText();
        const result = await gladiaClient.fromImage().toText().ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
          model: 'easy-ocr' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/ocr/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'easy-ocr',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const source_language_data = getRandomText();
        const result = await gladiaClient.ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/ocr/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const source_language_data = getRandomText();
        const result = await gladiaClient.ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
          model: 'easy-ocr' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/ocr/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'easy-ocr',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
      });
    });
  });

});
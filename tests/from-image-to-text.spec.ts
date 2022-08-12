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
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toText().asciify({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/asciify/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'ramesh-aditya',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toText().asciify({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/asciify/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.asciify({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/asciify/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'ramesh-aditya',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.asciify({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/asciify/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
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
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromImage().toText().classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/classification/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'alexnet',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
        expect(firstCallArgs.body.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.fromImage().toText().classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
          model: 'convnext_base' as any,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/classification/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'convnext_base',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
        expect(firstCallArgs.body.get('top_k')).toEqual(String(top_k_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/classification/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'alexnet',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
        expect(firstCallArgs.body.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const top_k_data = getRandomInt();
        const result = await gladiaClient.classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
          model: 'convnext_base' as any,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/classification/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'convnext_base',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
        expect(firstCallArgs.body.get('top_k')).toEqual(String(top_k_data));
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
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const source_language_data = getRandomText();
        const result = await gladiaClient.fromImage().toText().ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/ocr/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'easy-ocr',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
        expect(firstCallArgs.body.get('source_language')).toEqual(source_language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const source_language_data = getRandomText();
        const result = await gladiaClient.fromImage().toText().ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
          model: 'tesseract-default' as any,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/ocr/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'tesseract-default',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
        expect(firstCallArgs.body.get('source_language')).toEqual(source_language_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const source_language_data = getRandomText();
        const result = await gladiaClient.ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/ocr/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'easy-ocr',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
        expect(firstCallArgs.body.get('source_language')).toEqual(source_language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText(), String(getRandomInt())]);
        const image_url_data = getRandomText();
        const source_language_data = getRandomText();
        const result = await gladiaClient.ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
          model: 'tesseract-default' as any,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/text/ocr/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'tesseract-default',
        });
        expect(firstCallArgs.body.get('image')).toBeDefined();
        expect(firstCallArgs.body.get('image_url')).toEqual(image_url_data);
        expect(firstCallArgs.body.get('source_language')).toEqual(source_language_data);
      });
    });
  });

});
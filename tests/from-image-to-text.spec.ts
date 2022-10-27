/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import {
} from '../src/models';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromImageToText', () => {
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
        await gladiaClient.fromImage().toText().classification({
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
        await gladiaClient.fromImage().toText().classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
          model: 'convnext_base',
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
        await gladiaClient.classification({
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
        await gladiaClient.classification({
          image: image_data,
          image_url: image_url_data,
          top_k: top_k_data,
          model: 'convnext_base',
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
        await gladiaClient.fromImage().toText().ocr({
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
        await gladiaClient.fromImage().toText().ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
          model: 'easy-ocr',
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
        await gladiaClient.ocr({
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
        await gladiaClient.ocr({
          image: image_data,
          image_url: image_url_data,
          source_language: source_language_data,
          model: 'easy-ocr',
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
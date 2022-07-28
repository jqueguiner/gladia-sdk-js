/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import gladia from '../index';
import { HttpClient } from '../src/internal/http-client';
import { mockHttpClient } from './helpers/mocks';

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
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toText().asciify({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/asciify/');
        expect(arg.query).toEqual({ model: 'ramesh-aditya' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toText().asciify({
          image: blob,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/asciify/');
        expect(arg.query).toEqual({ model: 'fake-model-name' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.asciify({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/asciify/');
        expect(arg.query).toEqual({ model: 'ramesh-aditya' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.asciify({
          image: blob,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/asciify/');
        expect(arg.query).toEqual({ model: 'fake-model-name' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
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
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toText().classification({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/classification/');
        expect(arg.query).toEqual({ model: 'alexnet' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toText().classification({
          image: blob,
          model: 'convnext_base' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/classification/');
        expect(arg.query).toEqual({ model: 'convnext_base' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.classification({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/classification/');
        expect(arg.query).toEqual({ model: 'alexnet' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.classification({
          image: blob,
          model: 'convnext_base' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/classification/');
        expect(arg.query).toEqual({ model: 'convnext_base' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
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
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toText().ocr({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/ocr/');
        expect(arg.query).toEqual({ model: 'easy-ocr' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toText().ocr({
          image: blob,
          model: 'tesseract-default' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/ocr/');
        expect(arg.query).toEqual({ model: 'tesseract-default' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.ocr({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/ocr/');
        expect(arg.query).toEqual({ model: 'easy-ocr' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.ocr({
          image: blob,
          model: 'tesseract-default' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/text/ocr/');
        expect(arg.query).toEqual({ model: 'tesseract-default' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
  });

});
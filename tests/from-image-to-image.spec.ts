/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import gladia from '../index';
import { HttpClient } from '../src/internal/http-client';
import { mockHttpClient } from './helpers/mocks';

describe('FromImageToImage', () => {
  describe('backgroundRemoval', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toImage().backgroundRemoval({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/background-removal/');
        expect(arg.query).toEqual({ model: 'xception' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toImage().backgroundRemoval({
          image: blob,
          model: 'mobilenet' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/background-removal/');
        expect(arg.query).toEqual({ model: 'mobilenet' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.backgroundRemoval({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/background-removal/');
        expect(arg.query).toEqual({ model: 'xception' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.backgroundRemoval({
          image: blob,
          model: 'mobilenet' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/background-removal/');
        expect(arg.query).toEqual({ model: 'mobilenet' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
  });

  describe('colorization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toImage().colorization({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/colorization/');
        expect(arg.query).toEqual({ model: 'deoldify-stable' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toImage().colorization({
          image: blob,
          model: 'deoldify-artistic' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/colorization/');
        expect(arg.query).toEqual({ model: 'deoldify-artistic' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.colorization({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/colorization/');
        expect(arg.query).toEqual({ model: 'deoldify-stable' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.colorization({
          image: blob,
          model: 'deoldify-artistic' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/colorization/');
        expect(arg.query).toEqual({ model: 'deoldify-artistic' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
  });

  describe('faceBluring', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toImage().faceBluring({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/face-bluring/');
        expect(arg.query).toEqual({ model: 'ageitgey' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toImage().faceBluring({
          image: blob,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/face-bluring/');
        expect(arg.query).toEqual({ model: 'fake-model-name' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.faceBluring({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/face-bluring/');
        expect(arg.query).toEqual({ model: 'ageitgey' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.faceBluring({
          image: blob,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/face-bluring/');
        expect(arg.query).toEqual({ model: 'fake-model-name' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
  });

  describe('uncolorization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toImage().uncolorization({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/uncolorization/');
        expect(arg.query).toEqual({ model: 'v1' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.fromImage().toImage().uncolorization({
          image: blob,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/uncolorization/');
        expect(arg.query).toEqual({ model: 'fake-model-name' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.uncolorization({ image: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/uncolorization/');
        expect(arg.query).toEqual({ model: 'v1' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake image 🤫']);
        const result = await gladiaClient.uncolorization({
          image: blob,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/image/image/uncolorization/');
        expect(arg.query).toEqual({ model: 'fake-model-name' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('image')).toBeDefined();
      });
    });
  });

});
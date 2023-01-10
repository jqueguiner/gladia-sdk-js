/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import {
  ImageImageBackgroundReplacementModel,
  ImageImageDeblurringModel,
  ImageImageFaceBluringModel,
  ImageImageImageGuidedInpaintingModel,
  ImageImageUncolorizationModel,
} from '../src/models';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

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
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().backgroundRemoval({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-removal/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().backgroundRemoval({
          image: image_data,
          image_url: image_url_data,
          model: 'xception',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-removal/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'xception',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.backgroundRemoval({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-removal/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.backgroundRemoval({
          image: image_data,
          image_url: image_url_data,
          model: 'xception',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-removal/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'xception',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

  describe('backgroundReplacement', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const background_image_data = new Blob([getRandomText()]);
        const background_image_url_data = getRandomText();
        const alignment_data = getRandomText();
        await gladiaClient.fromImage().toImage().backgroundReplacement({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          background_image: background_image_data,
          background_image_url: background_image_url_data,
          alignment: alignment_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-replacement/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('background_image')).toBeDefined();
        expect(firstCallBody.get('background_image_url')).toEqual(background_image_url_data);
        expect(firstCallBody.get('alignment')).toEqual(alignment_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const background_image_data = new Blob([getRandomText()]);
        const background_image_url_data = getRandomText();
        const alignment_data = getRandomText();
        await gladiaClient.fromImage().toImage().backgroundReplacement({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          background_image: background_image_data,
          background_image_url: background_image_url_data,
          alignment: alignment_data,
          model: 'fake-model-name' as unknown as ImageImageBackgroundReplacementModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-replacement/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('background_image')).toBeDefined();
        expect(firstCallBody.get('background_image_url')).toEqual(background_image_url_data);
        expect(firstCallBody.get('alignment')).toEqual(alignment_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const background_image_data = new Blob([getRandomText()]);
        const background_image_url_data = getRandomText();
        const alignment_data = getRandomText();
        await gladiaClient.backgroundReplacement({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          background_image: background_image_data,
          background_image_url: background_image_url_data,
          alignment: alignment_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-replacement/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('background_image')).toBeDefined();
        expect(firstCallBody.get('background_image_url')).toEqual(background_image_url_data);
        expect(firstCallBody.get('alignment')).toEqual(alignment_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const background_image_data = new Blob([getRandomText()]);
        const background_image_url_data = getRandomText();
        const alignment_data = getRandomText();
        await gladiaClient.backgroundReplacement({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          background_image: background_image_data,
          background_image_url: background_image_url_data,
          alignment: alignment_data,
          model: 'fake-model-name' as unknown as ImageImageBackgroundReplacementModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-replacement/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('background_image')).toBeDefined();
        expect(firstCallBody.get('background_image_url')).toEqual(background_image_url_data);
        expect(firstCallBody.get('alignment')).toEqual(alignment_data);
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
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().colorization({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/colorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().colorization({
          image: image_data,
          image_url: image_url_data,
          model: 'deoldify-artistic',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/colorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'deoldify-artistic',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.colorization({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/colorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.colorization({
          image: image_data,
          image_url: image_url_data,
          model: 'deoldify-artistic',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/colorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'deoldify-artistic',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

  describe('deblurring', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().deblurring({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/deblurring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().deblurring({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as unknown as ImageImageDeblurringModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/deblurring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
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
        await gladiaClient.deblurring({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/deblurring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.deblurring({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as unknown as ImageImageDeblurringModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/deblurring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

  describe('enhancement', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().enhancement({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/enhancement/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().enhancement({
          image: image_data,
          image_url: image_url_data,
          model: 'LOL',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/enhancement/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'LOL',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.enhancement({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/enhancement/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.enhancement({
          image: image_data,
          image_url: image_url_data,
          model: 'LOL',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/enhancement/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'LOL',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
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
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().faceBluring({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/face-bluring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().faceBluring({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as unknown as ImageImageFaceBluringModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/face-bluring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
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
        await gladiaClient.faceBluring({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/face-bluring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.faceBluring({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as unknown as ImageImageFaceBluringModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/face-bluring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

  describe('guidedInpainting', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        const prompt_data = getRandomText();
        await gladiaClient.fromImage().toImage().guidedInpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          prompt: prompt_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/guided-inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        const prompt_data = getRandomText();
        await gladiaClient.fromImage().toImage().guidedInpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          prompt: prompt_data,
          model: 'compvis',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/guided-inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'compvis',
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        const prompt_data = getRandomText();
        await gladiaClient.guidedInpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          prompt: prompt_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/guided-inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        const prompt_data = getRandomText();
        await gladiaClient.guidedInpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          prompt: prompt_data,
          model: 'compvis',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/guided-inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'compvis',
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
      });
    });
  });

  describe('imageGuidedInpainting', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const example_image_data = new Blob([getRandomText()]);
        const example_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        const seed_data = getRandomInt();
        const steps_data = getRandomInt();
        const guidance_scale_data = getRandomInt();
        await gladiaClient.fromImage().toImage().imageGuidedInpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          example_image: example_image_data,
          example_image_url: example_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          seed: seed_data,
          steps: steps_data,
          guidance_scale: guidance_scale_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/image-guided-inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('example_image')).toBeDefined();
        expect(firstCallBody.get('example_image_url')).toEqual(example_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('guidance_scale')).toEqual(String(guidance_scale_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const example_image_data = new Blob([getRandomText()]);
        const example_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        const seed_data = getRandomInt();
        const steps_data = getRandomInt();
        const guidance_scale_data = getRandomInt();
        await gladiaClient.fromImage().toImage().imageGuidedInpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          example_image: example_image_data,
          example_image_url: example_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          seed: seed_data,
          steps: steps_data,
          guidance_scale: guidance_scale_data,
          model: 'fake-model-name' as unknown as ImageImageImageGuidedInpaintingModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/image-guided-inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('example_image')).toBeDefined();
        expect(firstCallBody.get('example_image_url')).toEqual(example_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('guidance_scale')).toEqual(String(guidance_scale_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const example_image_data = new Blob([getRandomText()]);
        const example_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        const seed_data = getRandomInt();
        const steps_data = getRandomInt();
        const guidance_scale_data = getRandomInt();
        await gladiaClient.imageGuidedInpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          example_image: example_image_data,
          example_image_url: example_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          seed: seed_data,
          steps: steps_data,
          guidance_scale: guidance_scale_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/image-guided-inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('example_image')).toBeDefined();
        expect(firstCallBody.get('example_image_url')).toEqual(example_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('guidance_scale')).toEqual(String(guidance_scale_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const example_image_data = new Blob([getRandomText()]);
        const example_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        const seed_data = getRandomInt();
        const steps_data = getRandomInt();
        const guidance_scale_data = getRandomInt();
        await gladiaClient.imageGuidedInpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          example_image: example_image_data,
          example_image_url: example_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          seed: seed_data,
          steps: steps_data,
          guidance_scale: guidance_scale_data,
          model: 'fake-model-name' as unknown as ImageImageImageGuidedInpaintingModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/image-guided-inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('example_image')).toBeDefined();
        expect(firstCallBody.get('example_image_url')).toEqual(example_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('guidance_scale')).toEqual(String(guidance_scale_data));
      });
    });
  });

  describe('inpainting', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().inpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().inpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          model: 'fcf',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fcf',
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        await gladiaClient.inpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const original_image_data = new Blob([getRandomText()]);
        const original_image_url_data = getRandomText();
        const mask_image_data = new Blob([getRandomText()]);
        const mask_image_url_data = getRandomText();
        await gladiaClient.inpainting({
          original_image: original_image_data,
          original_image_url: original_image_url_data,
          mask_image: mask_image_data,
          mask_image_url: mask_image_url_data,
          model: 'fcf',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/inpainting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fcf',
        });
        expect(firstCallBody.get('original_image')).toBeDefined();
        expect(firstCallBody.get('original_image_url')).toEqual(original_image_url_data);
        expect(firstCallBody.get('mask_image')).toBeDefined();
        expect(firstCallBody.get('mask_image_url')).toEqual(mask_image_url_data);
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
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().uncolorization({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/uncolorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.fromImage().toImage().uncolorization({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as unknown as ImageImageUncolorizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/uncolorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
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
        await gladiaClient.uncolorization({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/uncolorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        await gladiaClient.uncolorization({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as unknown as ImageImageUncolorizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/uncolorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

});
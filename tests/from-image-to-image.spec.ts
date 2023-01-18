/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import {
  ImageImageBackgroundReplacementModel,
  ImageImageDeblurringModel,
  ImageImageUncolorizationModel,
} from '../src/models';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomFromEnum, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';
import {
  IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES,
} from '../src/client/input-models';

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
        const alignment_data = getRandomFromEnum(IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES);
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
        const alignment_data = getRandomFromEnum(IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES);
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
        const alignment_data = getRandomFromEnum(IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES);
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
        const alignment_data = getRandomFromEnum(IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES);
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
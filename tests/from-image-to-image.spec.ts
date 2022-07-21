import { GladiaClient } from '../src/gladia-client';
import { FromImageToImage } from '../src/from-image-to-image';
import { HttpClient } from '../src/http-client';
import gladia from '../index';
import {
  IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
  IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
  IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
  IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
} from '../src/models';
import { mockHttpClient } from './mock.spec';

describe(FromImageToImage.name, () => {
  testSuite({
    method: 'backgroundRemoval',
    url: '/image/image/background-removal/',
    defaultModel: IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
  });
  testSuite({
    method: 'colorization',
    url: '/image/image/colorization/',
    defaultModel: IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'faceBluring',
    url: '/image/image/face-bluring/',
    defaultModel: IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
  });
  testSuite({
    method: 'uncolorization',
    url: '/image/image/uncolorization/',
    defaultModel: IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
  });
});

type TestSuite = {
  method: keyof typeof FromImageToImage.prototype;
  url: string;
  defaultModel: string;
};

const textEncoder = new TextEncoder();
function testSuite({ method, url, defaultModel }: TestSuite) {
  describe(method, () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    it('should call the api with the text and the default model by default', async () => {
      const blob = new Blob(['this is an image 🤫']);
      const result = await gladiaClient.fromImage().toImage()[method]({ image: blob });
      expect(result).toBeDefined();
      expect(httpClientMock.post).toHaveBeenCalledTimes(1);
      const formData = new FormData();
      formData.append('image', blob);
      const postMock = httpClientMock.post as jest.Mock;
      const arg = postMock.mock.calls[0][0];
      expect(arg.url).toEqual(url);
      expect(arg.query).toEqual({ model: defaultModel });
      expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
    });
    it('should call the api with the text and the specified model', async () => {
      const blob = new Blob(['this is an image 🤫']);
      const result = await gladiaClient
        .fromImage()
        .toImage()
        [method]({
          image: blob,
          model: 'custom-model',
        } as any);
      expect(result).toBeDefined();
      expect(httpClientMock.post).toHaveBeenCalledTimes(1);
      const formData = new FormData();
      formData.append('image', blob);
      const postMock = httpClientMock.post as jest.Mock;
      const arg = postMock.mock.calls[0][0];
      expect(arg.url).toEqual(url);
      expect(arg.query).toEqual({ model: 'custom-model' });
      expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
    });

    describe('shortcut', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['this is an image 🤫']);
        const result = await gladiaClient[method]({
          image: blob,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const formData = new FormData();
        formData.append('image', blob);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual(url);
        expect(arg.query).toEqual({ model: defaultModel });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['this is an image 🤫']);
        const result = await gladiaClient[method]({
          image: blob,
          model: 'custom-model',
        } as any);
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const formData = new FormData();
        formData.append('image', blob);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual(url);
        expect(arg.query).toEqual({ model: 'custom-model' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
      });
    });
  });
}

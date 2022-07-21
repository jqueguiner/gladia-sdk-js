import { FromImageToText } from '../src/from-image-to-text';
import { GladiaClient } from '../src/gladia-client';
import gladia from '../index';
import { HttpClient } from '../src/http-client';
import {
  IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL,
  IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL,
  IMAGE_TEXT_OCR_DEFAULT_MODEL,
} from '../src/models';
import { mockHttpClient } from './mock.spec';

describe(FromImageToText.name, () => {
  testSuite({
    method: 'asciify',
    url: '/image/text/asciify/',
    defaultModel: IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL,
  });
  testSuite({
    method: 'classification',
    url: '/image/text/classification/',
    defaultModel: IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL,
  });
  testSuite({
    method: 'ocr',
    url: '/image/text/ocr/',
    defaultModel: IMAGE_TEXT_OCR_DEFAULT_MODEL,
  });
});

type TestSuite = {
  method: keyof typeof FromImageToText.prototype;
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
      httpClientMock = gladiaClient.fromImage().toText()['httpClient'];
    });

    it('should call the api with the text and the default model by default', async () => {
      const blob = new Blob(['this is an image 🤫']);
      const result = await gladiaClient.fromImage().toText()[method]({ image: blob });
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
        .toText()
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

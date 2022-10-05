/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import {
} from '../src/models';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromTextToImage', () => {
  describe('imageGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const prompt_data = getRandomText();
        const samples_data = getRandomInt();
        const steps_data = getRandomInt();
        const seed_data = getRandomInt();
        await gladiaClient.fromText().toImage().imageGeneration({
          prompt: prompt_data,
          samples: samples_data,
          steps: steps_data,
          seed: seed_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/image/image-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.responseType).toEqual('json');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
        expect(firstCallBody.get('samples')).toEqual(String(samples_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const prompt_data = getRandomText();
        const samples_data = getRandomInt();
        const steps_data = getRandomInt();
        const seed_data = getRandomInt();
        await gladiaClient.fromText().toImage().imageGeneration({
          prompt: prompt_data,
          samples: samples_data,
          steps: steps_data,
          seed: seed_data,
          model: 'dream-studio',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/image/image-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.responseType).toEqual('json');
        expect(firstCallArgs.query).toEqual({
          model: 'dream-studio',
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
        expect(firstCallBody.get('samples')).toEqual(String(samples_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
      });
      it('should call the api with responseType = "arraybuffer" when samples = 1', async () => {
        const prompt_data = getRandomText();
        const samples_data = 1;
        const steps_data = getRandomInt();
        const seed_data = getRandomInt();
        await gladiaClient.fromText().toImage().imageGeneration({
          prompt: prompt_data,
          samples: samples_data,
          steps: steps_data,
          seed: seed_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/image/image-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
        expect(firstCallBody.get('samples')).toEqual(String(samples_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
      });
      it('should call the api with responseType = "json" when samples > 1', async () => {
        const prompt_data = getRandomText();
        const samples_data = 2;
        const steps_data = getRandomInt();
        const seed_data = getRandomInt();
        await gladiaClient.fromText().toImage().imageGeneration({
          prompt: prompt_data,
          samples: samples_data,
          steps: steps_data,
          seed: seed_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/image/image-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.responseType).toEqual('json');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
        expect(firstCallBody.get('samples')).toEqual(String(samples_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const prompt_data = getRandomText();
        const samples_data = getRandomInt();
        const steps_data = getRandomInt();
        const seed_data = getRandomInt();
        await gladiaClient.imageGeneration({
          prompt: prompt_data,
          samples: samples_data,
          steps: steps_data,
          seed: seed_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/image/image-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.responseType).toEqual('json');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
        expect(firstCallBody.get('samples')).toEqual(String(samples_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const prompt_data = getRandomText();
        const samples_data = getRandomInt();
        const steps_data = getRandomInt();
        const seed_data = getRandomInt();
        await gladiaClient.imageGeneration({
          prompt: prompt_data,
          samples: samples_data,
          steps: steps_data,
          seed: seed_data,
          model: 'dream-studio',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/image/image-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.responseType).toEqual('json');
        expect(firstCallArgs.query).toEqual({
          model: 'dream-studio',
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
        expect(firstCallBody.get('samples')).toEqual(String(samples_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
      });
      it('should call the api with responseType = "arraybuffer" when samples = 1', async () => {
        const prompt_data = getRandomText();
        const samples_data = 1;
        const steps_data = getRandomInt();
        const seed_data = getRandomInt();
        await gladiaClient.imageGeneration({
          prompt: prompt_data,
          samples: samples_data,
          steps: steps_data,
          seed: seed_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/image/image-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
        expect(firstCallBody.get('samples')).toEqual(String(samples_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
      });
      it('should call the api with responseType = "json" when samples > 1', async () => {
        const prompt_data = getRandomText();
        const samples_data = 2;
        const steps_data = getRandomInt();
        const seed_data = getRandomInt();
        await gladiaClient.imageGeneration({
          prompt: prompt_data,
          samples: samples_data,
          steps: steps_data,
          seed: seed_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/image/image-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.responseType).toEqual('json');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
        expect(firstCallBody.get('samples')).toEqual(String(samples_data));
        expect(firstCallBody.get('steps')).toEqual(String(steps_data));
        expect(firstCallBody.get('seed')).toEqual(String(seed_data));
      });
    });
  });

});
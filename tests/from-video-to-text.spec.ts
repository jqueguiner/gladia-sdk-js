/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import {
} from '../src/models';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromVideoToText', () => {
  describe('actionClassifications', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromVideo().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const video_data = new Blob([getRandomText()]);
        const video_url_data = getRandomText();
        await gladiaClient.fromVideo().toText().actionClassifications({
          video: video_data,
          video_url: video_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/video/text/action-classifications/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('video')).toBeDefined();
        expect(firstCallBody.get('video_url')).toEqual(video_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const video_data = new Blob([getRandomText()]);
        const video_url_data = getRandomText();
        await gladiaClient.fromVideo().toText().actionClassifications({
          video: video_data,
          video_url: video_url_data,
          model: 'kinetics--facebook/timesformer-base-finetuned-k400',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/video/text/action-classifications/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'kinetics--facebook/timesformer-base-finetuned-k400',
        });
        expect(firstCallBody.get('video')).toBeDefined();
        expect(firstCallBody.get('video_url')).toEqual(video_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const video_data = new Blob([getRandomText()]);
        const video_url_data = getRandomText();
        await gladiaClient.actionClassifications({
          video: video_data,
          video_url: video_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/video/text/action-classifications/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('video')).toBeDefined();
        expect(firstCallBody.get('video_url')).toEqual(video_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const video_data = new Blob([getRandomText()]);
        const video_url_data = getRandomText();
        await gladiaClient.actionClassifications({
          video: video_data,
          video_url: video_url_data,
          model: 'kinetics--facebook/timesformer-base-finetuned-k400',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/video/text/action-classifications/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'kinetics--facebook/timesformer-base-finetuned-k400',
        });
        expect(firstCallBody.get('video')).toBeDefined();
        expect(firstCallBody.get('video_url')).toEqual(video_url_data);
      });
    });
  });

});
/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromAudioToText', () => {
  describe('audioTranscription', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromAudio().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const audio_data = new Blob([getRandomText(), String(getRandomInt())]);
        const audio_url_data = getRandomText();
        const language_data = getRandomText();
        const result = await gladiaClient.fromAudio().toText().audioTranscription({
          audio: audio_data,
          audio_url: audio_url_data,
          language: language_data,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/audio/text/audio-transcription/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'coqui_english_huge_vocab',
        });
        expect(firstCallArgs.body.get('audio')).toBeDefined();
        expect(firstCallArgs.body.get('audio_url')).toEqual(audio_url_data);
        expect(firstCallArgs.body.get('language')).toEqual(language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const audio_data = new Blob([getRandomText(), String(getRandomInt())]);
        const audio_url_data = getRandomText();
        const language_data = getRandomText();
        const result = await gladiaClient.fromAudio().toText().audioTranscription({
          audio: audio_data,
          audio_url: audio_url_data,
          language: language_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/audio/text/audio-transcription/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallArgs.body.get('audio')).toBeDefined();
        expect(firstCallArgs.body.get('audio_url')).toEqual(audio_url_data);
        expect(firstCallArgs.body.get('language')).toEqual(language_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const audio_data = new Blob([getRandomText(), String(getRandomInt())]);
        const audio_url_data = getRandomText();
        const language_data = getRandomText();
        const result = await gladiaClient.audioTranscription({
          audio: audio_data,
          audio_url: audio_url_data,
          language: language_data,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/audio/text/audio-transcription/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'coqui_english_huge_vocab',
        });
        expect(firstCallArgs.body.get('audio')).toBeDefined();
        expect(firstCallArgs.body.get('audio_url')).toEqual(audio_url_data);
        expect(firstCallArgs.body.get('language')).toEqual(language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const audio_data = new Blob([getRandomText(), String(getRandomInt())]);
        const audio_url_data = getRandomText();
        const language_data = getRandomText();
        const result = await gladiaClient.audioTranscription({
          audio: audio_data,
          audio_url: audio_url_data,
          language: language_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/audio/text/audio-transcription/');
        expect(firstCallArgs.headers).toBeUndefined();
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallArgs.body.get('audio')).toBeDefined();
        expect(firstCallArgs.body.get('audio_url')).toEqual(audio_url_data);
        expect(firstCallArgs.body.get('language')).toEqual(language_data);
      });
    });
  });

});
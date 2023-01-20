/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import {
} from '../src/models';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

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
        const audio_data = new Blob([getRandomText()]);
        const audio_url_data = getRandomText();
        const language_data = getRandomText();
        await gladiaClient.fromAudio().toText().audioTranscription({
          audio: audio_data,
          audio_url: audio_url_data,
          language: language_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/audio/text/audio-transcription/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('audio')).toBeDefined();
        expect(firstCallBody.get('audio_url')).toEqual(audio_url_data);
        expect(firstCallBody.get('language')).toEqual(language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const audio_data = new Blob([getRandomText()]);
        const audio_url_data = getRandomText();
        const language_data = getRandomText();
        await gladiaClient.fromAudio().toText().audioTranscription({
          audio: audio_data,
          audio_url: audio_url_data,
          language: language_data,
          model: 'coqui_english_huge_vocab',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/audio/text/audio-transcription/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'coqui_english_huge_vocab',
        });
        expect(firstCallBody.get('audio')).toBeDefined();
        expect(firstCallBody.get('audio_url')).toEqual(audio_url_data);
        expect(firstCallBody.get('language')).toEqual(language_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const audio_data = new Blob([getRandomText()]);
        const audio_url_data = getRandomText();
        const language_data = getRandomText();
        await gladiaClient.audioTranscription({
          audio: audio_data,
          audio_url: audio_url_data,
          language: language_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/audio/text/audio-transcription/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('audio')).toBeDefined();
        expect(firstCallBody.get('audio_url')).toEqual(audio_url_data);
        expect(firstCallBody.get('language')).toEqual(language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const audio_data = new Blob([getRandomText()]);
        const audio_url_data = getRandomText();
        const language_data = getRandomText();
        await gladiaClient.audioTranscription({
          audio: audio_data,
          audio_url: audio_url_data,
          language: language_data,
          model: 'coqui_english_huge_vocab',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/audio/text/audio-transcription/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.query).toEqual({
          model: 'coqui_english_huge_vocab',
        });
        expect(firstCallBody.get('audio')).toBeDefined();
        expect(firstCallBody.get('audio_url')).toEqual(audio_url_data);
        expect(firstCallBody.get('language')).toEqual(language_data);
      });
    });
  });

});
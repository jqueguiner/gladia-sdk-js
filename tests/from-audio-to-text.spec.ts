/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import gladia from '../index';
import { HttpClient } from '../src/internal/http-client';
import { mockHttpClient } from './helpers/mocks';

describe('FromAudioToText', () => {
  describe('speech_to_text', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromAudio().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake audio 🤫']);
        const result = await gladiaClient.fromAudio().toText().speech_to_text({ audio: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/audio/text/speech_to_text/');
        expect(arg.query).toEqual({ model: 'coqui_english_huge_vocab' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('audio')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake audio 🤫']);
        const result = await gladiaClient.fromAudio().toText().speech_to_text({
          audio: blob,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/audio/text/speech_to_text/');
        expect(arg.query).toEqual({ model: 'fake-model-name' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('audio')).toBeDefined();
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const blob = new Blob(['fake audio 🤫']);
        const result = await gladiaClient.speech_to_text({ audio: blob });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/audio/text/speech_to_text/');
        expect(arg.query).toEqual({ model: 'coqui_english_huge_vocab' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('audio')).toBeDefined();
      });
      it('should call the api with the text and the specified model', async () => {
        const blob = new Blob(['fake audio 🤫']);
        const result = await gladiaClient.speech_to_text({
          audio: blob,
          model: 'fake-model-name' as any,
        });
        expect(result).toBeDefined();
        expect(httpClientMock.post).toHaveBeenCalledTimes(1);
        const postMock = httpClientMock.post as jest.Mock;
        const arg = postMock.mock.calls[0][0];
        expect(arg.url).toEqual('/audio/text/speech_to_text/');
        expect(arg.query).toEqual({ model: 'fake-model-name' });
        expect(arg.headers).toEqual({ 'Content-Type': 'multipart/form-data' });
        expect(arg.body.get('audio')).toBeDefined();
      });
    });
  });

});
import gladia, { GladiaClient } from '../src';
import { HttpClient } from '../src/internal/http-client';
import { getPostMock, getRandomInt, getRandomText, mockHttpClient } from './helpers/mocks';
import { PreviewFeatureError } from '../src/utils/error';

describe('AutoML', () => {
  let gladiaClient: GladiaClient;
  let httpClientMock: HttpClient;

  beforeEach(() => {
    gladiaClient = gladia({
      apiKey: 'API-KEY',
      customHttpClient: mockHttpClient(),
      enablePreviewFeatures: true,
      autoMlBaseUrl: 'https://example.com',
    });
    httpClientMock = gladiaClient.trainable().automl()['httpClient'];
  });

  describe('preview feature', () => {
    it('should throw an error if call train without enabling preview features', async () => {
      gladiaClient = gladia({
        apiKey: 'API-KEY',
        customHttpClient: mockHttpClient(),
        enablePreviewFeatures: false,
      });
      try {
        await gladiaClient.trainable().automl().train({ data: [], label: '' });
      } catch (error) {
        expect(error).toEqual(new PreviewFeatureError());
      }
    });
    it('should throw an error if call train without specifying the automl url', async () => {
      gladiaClient = gladia({
        apiKey: 'API-KEY',
        customHttpClient: mockHttpClient(),
        enablePreviewFeatures: true,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        autoMlBaseUrl: undefined!,
      });
      try {
        await gladiaClient.trainable().automl().train({ data: [], label: '' });
      } catch (error) {
        expect(error).toEqual(new PreviewFeatureError());
      }
    });
    it('should throw an error if call predict without enabling preview features', async () => {
      gladiaClient = gladia({
        apiKey: 'API-KEY',
        customHttpClient: mockHttpClient(),
        enablePreviewFeatures: false,
      });
      try {
        await gladiaClient.trainable().automl().predict({ data: [], model_id: '' });
      } catch (error) {
        expect(error).toEqual(new PreviewFeatureError());
      }
    });
    it('should throw an error if call predict without specifying the automl url', async () => {
      gladiaClient = gladia({
        apiKey: 'API-KEY',
        customHttpClient: mockHttpClient(),
        enablePreviewFeatures: true,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        autoMlBaseUrl: undefined!,
      });
      try {
        await gladiaClient.trainable().automl().predict({ data: [], model_id: '' });
      } catch (error) {
        expect(error).toEqual(new PreviewFeatureError());
      }
    });
  });

  describe('train', () => {
    it('should call the api correctly with array', async () => {
      const data_key1 = getRandomText();
      const data_key2 = getRandomText();
      const data_data = [
        { [data_key1]: getRandomText(), [data_key2]: getRandomInt() },
        { [data_key2]: getRandomText(), [data_key2]: getRandomInt() },
      ];
      const label_data = getRandomText();
      await gladiaClient.trainable().automl().train({
        data: data_data,
        label: label_data,
      });
      const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
      expect(postMock).toHaveBeenCalledTimes(1);
      expect(firstCallArgs.url).toEqual('/multimodal/create-model/');
      expect(firstCallArgs.headers).toEqual({
        'Content-Type': 'application/json',
      });
      expect(firstCallArgs.responseType).toEqual('json');
      expect(firstCallArgs.query).toBeUndefined();
      expect(firstCallBody.data).toEqual(data_data);
      expect(firstCallBody.label).toEqual(label_data);
    });
    it('should call the api correctly with dictionnary', async () => {
      const data_key1 = getRandomText();
      const data_key2 = getRandomText();
      const data_data = {
        [data_key1]: [getRandomText(), getRandomText()],
        [data_key2]: [getRandomInt(), getRandomInt()],
      };
      const label_data = getRandomText();
      await gladiaClient.trainable().automl().train({
        data: data_data,
        label: label_data,
      });
      const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
      expect(postMock).toHaveBeenCalledTimes(1);
      expect(firstCallArgs.url).toEqual('/multimodal/create-model/');
      expect(firstCallArgs.headers).toEqual({
        'Content-Type': 'application/json',
      });
      expect(firstCallArgs.responseType).toEqual('json');
      expect(firstCallArgs.query).toBeUndefined();
      expect(firstCallBody.data).toEqual(data_data);
      expect(firstCallBody.label).toEqual(label_data);
    });
    it('should call the api correctly with optional args', async () => {
      const data_key1 = getRandomText();
      const data_key2 = getRandomText();
      const data_data = {
        [data_key1]: [getRandomText(), getRandomText()],
        [data_key2]: [getRandomInt(), getRandomInt()],
      };
      const label_data = getRandomText();
      const eval_metric_data = getRandomText();
      const time_limit_data = getRandomInt();
      await gladiaClient.trainable().automl().train({
        data: data_data,
        label: label_data,
        time_limit: time_limit_data,
        eval_metric: eval_metric_data,
        kind: 'tabular',
      });
      const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
      expect(postMock).toHaveBeenCalledTimes(1);
      expect(firstCallArgs.url).toEqual('/tabular/create-model/');
      expect(firstCallArgs.headers).toEqual({
        'Content-Type': 'application/json',
      });
      expect(firstCallArgs.responseType).toEqual('json');
      expect(firstCallArgs.query).toBeUndefined();
      expect(firstCallBody.data).toEqual(data_data);
      expect(firstCallBody.label).toEqual(label_data);
      expect(firstCallBody.time_limit).toEqual(time_limit_data);
      expect(firstCallBody.eval_metric).toEqual(eval_metric_data);
    });
  });

  describe('predict', () => {
    it('should call the api correctly with array', async () => {
      const data_key1 = getRandomText();
      const data_key2 = getRandomText();
      const data_data = [
        { [data_key1]: getRandomText(), [data_key2]: getRandomInt() },
        { [data_key2]: getRandomText(), [data_key2]: getRandomInt() },
      ];
      const model_id_data = getRandomText();
      await gladiaClient.trainable().automl().predict({
        data: data_data,
        model_id: model_id_data,
      });
      const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
      expect(postMock).toHaveBeenCalledTimes(1);
      expect(firstCallArgs.url).toEqual('/multimodal/predict/');
      expect(firstCallArgs.headers).toEqual({
        'Content-Type': 'application/json',
      });
      expect(firstCallArgs.responseType).toEqual('json');
      expect(firstCallArgs.query).toBeUndefined();
      expect(firstCallBody.data).toEqual(data_data);
      expect(firstCallBody.model_id).toEqual(model_id_data);
    });
    it('should call the api correctly with dictionnary', async () => {
      const data_key1 = getRandomText();
      const data_key2 = getRandomText();
      const data_data = {
        [data_key1]: [getRandomText(), getRandomText()],
        [data_key2]: [getRandomInt(), getRandomInt()],
      };
      const model_id_data = getRandomText();
      await gladiaClient.trainable().automl().predict({
        data: data_data,
        model_id: model_id_data,
        kind: 'text',
      });
      const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
      expect(postMock).toHaveBeenCalledTimes(1);
      expect(firstCallArgs.url).toEqual('/text/predict/');
      expect(firstCallArgs.headers).toEqual({
        'Content-Type': 'application/json',
      });
      expect(firstCallArgs.responseType).toEqual('json');
      expect(firstCallArgs.query).toBeUndefined();
      expect(firstCallBody.data).toEqual(data_data);
      expect(firstCallBody.model_id).toEqual(model_id_data);
    });
  });
});

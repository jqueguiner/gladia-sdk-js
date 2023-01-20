/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import {
  TextTextAgeFromNameModel,
  TextTextAnonymizationModel,
  TextTextBulletPointGenerationModel,
  TextTextCommandGenerationModel,
  TextTextCompanyCategorizationModel,
  TextTextCompanyNameNormalizationModel,
  TextTextCompanyStockCodeModel,
  TextTextCountryFromNameModel,
  TextTextDateCleaningModel,
  TextTextEmotionRecognitionModel,
  TextTextGenderFromNameModel,
  TextTextGpsAddressFormattingModel,
  TextTextGpt3Model,
  TextTextGuessCityModel,
  TextTextGuessCountryModel,
  TextTextGuessIntentModel,
  TextTextKeywordExtractionModel,
  TextTextLanguageCodesModel,
  TextTextLanguageGenerationModel,
  TextTextNamedEntityRecognitionModel,
  TextTextNextWordPredictionModel,
  TextTextProductOwnershipModel,
  TextTextProductSentimentModel,
  TextTextPunctuationRestorationModel,
  TextTextQuestionAnsweringModel,
  TextTextSentimentAnalysisModel,
  TextTextSimilarityModel,
  TextTextSpeakerRecognitionModel,
  TextTextTranslationModel,
  TextTextVatCountryGuessingModel,
  TextTextWebsiteClassificationModel,
} from '../src/models';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomArray, getRandomFloat, getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromTextToText', () => {
  describe('ageFromName', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const name_data = getRandomText();
        await gladiaClient.fromText().toText().ageFromName({
          name: name_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/age-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const name_data = getRandomText();
        await gladiaClient.fromText().toText().ageFromName({
          name: name_data,
          model: 'fake-model-name' as unknown as TextTextAgeFromNameModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/age-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const name_data = getRandomText();
        await gladiaClient.ageFromName({
          name: name_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/age-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const name_data = getRandomText();
        await gladiaClient.ageFromName({
          name: name_data,
          model: 'fake-model-name' as unknown as TextTextAgeFromNameModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/age-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
    });
  });

  describe('anonymization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const language_data = getRandomText();
        const entities_data = getRandomText();
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().anonymization({
          language: language_data,
          entities: entities_data,
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/anonymization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('language')).toEqual(language_data);
        expect(firstCallBody.get('entities')).toEqual(entities_data);
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const language_data = getRandomText();
        const entities_data = getRandomText();
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().anonymization({
          language: language_data,
          entities: entities_data,
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextAnonymizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/anonymization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('language')).toEqual(language_data);
        expect(firstCallBody.get('entities')).toEqual(entities_data);
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const language_data = getRandomText();
        const entities_data = getRandomText();
        const text_data = getRandomText();
        await gladiaClient.anonymization({
          language: language_data,
          entities: entities_data,
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/anonymization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('language')).toEqual(language_data);
        expect(firstCallBody.get('entities')).toEqual(entities_data);
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const language_data = getRandomText();
        const entities_data = getRandomText();
        const text_data = getRandomText();
        await gladiaClient.anonymization({
          language: language_data,
          entities: entities_data,
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextAnonymizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/anonymization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('language')).toEqual(language_data);
        expect(firstCallBody.get('entities')).toEqual(entities_data);
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('bulletPointGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const bullets_data = getRandomInt();
        await gladiaClient.fromText().toText().bulletPointGeneration({
          text: text_data,
          bullets: bullets_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/bullet-point-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('bullets')).toEqual(String(bullets_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const bullets_data = getRandomInt();
        await gladiaClient.fromText().toText().bulletPointGeneration({
          text: text_data,
          bullets: bullets_data,
          model: 'fake-model-name' as unknown as TextTextBulletPointGenerationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/bullet-point-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('bullets')).toEqual(String(bullets_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const bullets_data = getRandomInt();
        await gladiaClient.bulletPointGeneration({
          text: text_data,
          bullets: bullets_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/bullet-point-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('bullets')).toEqual(String(bullets_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const bullets_data = getRandomInt();
        await gladiaClient.bulletPointGeneration({
          text: text_data,
          bullets: bullets_data,
          model: 'fake-model-name' as unknown as TextTextBulletPointGenerationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/bullet-point-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('bullets')).toEqual(String(bullets_data));
      });
    });
  });

  describe('commandGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().commandGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/command-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().commandGeneration({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextCommandGenerationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/command-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.commandGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/command-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.commandGeneration({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextCommandGenerationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/command-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('companyCategorization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().companyCategorization({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-categorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().companyCategorization({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextCompanyCategorizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-categorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.companyCategorization({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-categorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.companyCategorization({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextCompanyCategorizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-categorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('companyNameNormalization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().companyNameNormalization({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-name-normalization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().companyNameNormalization({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextCompanyNameNormalizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-name-normalization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.companyNameNormalization({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-name-normalization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.companyNameNormalization({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextCompanyNameNormalizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-name-normalization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('companyStockCode', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().companyStockCode({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-stock-code/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().companyStockCode({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextCompanyStockCodeModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-stock-code/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.companyStockCode({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-stock-code/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.companyStockCode({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextCompanyStockCodeModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/company-stock-code/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('countryFromName', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const name_data = getRandomText();
        await gladiaClient.fromText().toText().countryFromName({
          name: name_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/country-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const name_data = getRandomText();
        await gladiaClient.fromText().toText().countryFromName({
          name: name_data,
          model: 'fake-model-name' as unknown as TextTextCountryFromNameModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/country-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const name_data = getRandomText();
        await gladiaClient.countryFromName({
          name: name_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/country-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const name_data = getRandomText();
        await gladiaClient.countryFromName({
          name: name_data,
          model: 'fake-model-name' as unknown as TextTextCountryFromNameModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/country-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
    });
  });

  describe('dateCleaning', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const date_data = getRandomText();
        await gladiaClient.fromText().toText().dateCleaning({
          date: date_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/date-cleaning/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('date')).toEqual(date_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const date_data = getRandomText();
        await gladiaClient.fromText().toText().dateCleaning({
          date: date_data,
          model: 'fake-model-name' as unknown as TextTextDateCleaningModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/date-cleaning/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('date')).toEqual(date_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const date_data = getRandomText();
        await gladiaClient.dateCleaning({
          date: date_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/date-cleaning/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('date')).toEqual(date_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const date_data = getRandomText();
        await gladiaClient.dateCleaning({
          date: date_data,
          model: 'fake-model-name' as unknown as TextTextDateCleaningModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/date-cleaning/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('date')).toEqual(date_data);
      });
    });
  });

  describe('emotionRecognition', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const texts_data = getRandomArray();
        await gladiaClient.fromText().toText().emotionRecognition({
          texts: texts_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/emotion-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('texts')).toEqual(texts_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const texts_data = getRandomArray();
        await gladiaClient.fromText().toText().emotionRecognition({
          texts: texts_data,
          model: 'fake-model-name' as unknown as TextTextEmotionRecognitionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/emotion-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('texts')).toEqual(texts_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const texts_data = getRandomArray();
        await gladiaClient.emotionRecognition({
          texts: texts_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/emotion-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('texts')).toEqual(texts_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const texts_data = getRandomArray();
        await gladiaClient.emotionRecognition({
          texts: texts_data,
          model: 'fake-model-name' as unknown as TextTextEmotionRecognitionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/emotion-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('texts')).toEqual(texts_data);
      });
    });
  });

  describe('genderFromName', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const name_data = getRandomText();
        await gladiaClient.fromText().toText().genderFromName({
          name: name_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gender-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const name_data = getRandomText();
        await gladiaClient.fromText().toText().genderFromName({
          name: name_data,
          model: 'fake-model-name' as unknown as TextTextGenderFromNameModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gender-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const name_data = getRandomText();
        await gladiaClient.genderFromName({
          name: name_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gender-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const name_data = getRandomText();
        await gladiaClient.genderFromName({
          name: name_data,
          model: 'fake-model-name' as unknown as TextTextGenderFromNameModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gender-from-name/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('name')).toEqual(name_data);
      });
    });
  });

  describe('gpsAddressFormatting', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const latitude_data = getRandomFloat();
        const longitude_data = getRandomFloat();
        await gladiaClient.fromText().toText().gpsAddressFormatting({
          latitude: latitude_data,
          longitude: longitude_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gps-address-formatting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('latitude')).toEqual(String(latitude_data));
        expect(firstCallBody.get('longitude')).toEqual(String(longitude_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const latitude_data = getRandomFloat();
        const longitude_data = getRandomFloat();
        await gladiaClient.fromText().toText().gpsAddressFormatting({
          latitude: latitude_data,
          longitude: longitude_data,
          model: 'fake-model-name' as unknown as TextTextGpsAddressFormattingModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gps-address-formatting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('latitude')).toEqual(String(latitude_data));
        expect(firstCallBody.get('longitude')).toEqual(String(longitude_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const latitude_data = getRandomFloat();
        const longitude_data = getRandomFloat();
        await gladiaClient.gpsAddressFormatting({
          latitude: latitude_data,
          longitude: longitude_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gps-address-formatting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('latitude')).toEqual(String(latitude_data));
        expect(firstCallBody.get('longitude')).toEqual(String(longitude_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const latitude_data = getRandomFloat();
        const longitude_data = getRandomFloat();
        await gladiaClient.gpsAddressFormatting({
          latitude: latitude_data,
          longitude: longitude_data,
          model: 'fake-model-name' as unknown as TextTextGpsAddressFormattingModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gps-address-formatting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('latitude')).toEqual(String(latitude_data));
        expect(firstCallBody.get('longitude')).toEqual(String(longitude_data));
      });
    });
  });

  describe('gpt3', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().gpt3({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gpt3/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().gpt3({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextGpt3Model,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gpt3/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.gpt3({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gpt3/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.gpt3({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextGpt3Model,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/gpt3/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('guessCity', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().guessCity({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-city/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().guessCity({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextGuessCityModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-city/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.guessCity({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-city/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.guessCity({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextGuessCityModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-city/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('guessCountry', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().guessCountry({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-country/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().guessCountry({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextGuessCountryModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-country/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.guessCountry({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-country/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.guessCountry({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextGuessCountryModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-country/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('guessIntent', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().guessIntent({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-intent/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().guessIntent({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextGuessIntentModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-intent/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.guessIntent({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-intent/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.guessIntent({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextGuessIntentModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/guess-intent/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('hateSpeechDetection', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().hateSpeechDetection({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().hateSpeechDetection({
          text: text_data,
          model: 'dkleczek_Polish-Hate-Speech-Detection-Herbert-Large',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'dkleczek_Polish-Hate-Speech-Detection-Herbert-Large',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.hateSpeechDetection({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.hateSpeechDetection({
          text: text_data,
          model: 'dkleczek_Polish-Hate-Speech-Detection-Herbert-Large',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'dkleczek_Polish-Hate-Speech-Detection-Herbert-Large',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('headlineGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const max_length_data = getRandomInt();
        await gladiaClient.fromText().toText().headlineGeneration({
          text: text_data,
          max_length: max_length_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/headline-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('max_length')).toEqual(String(max_length_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const max_length_data = getRandomInt();
        await gladiaClient.fromText().toText().headlineGeneration({
          text: text_data,
          max_length: max_length_data,
          model: 'michau-t5-base-en-generate-headline',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/headline-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'michau-t5-base-en-generate-headline',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('max_length')).toEqual(String(max_length_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const max_length_data = getRandomInt();
        await gladiaClient.headlineGeneration({
          text: text_data,
          max_length: max_length_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/headline-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('max_length')).toEqual(String(max_length_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const max_length_data = getRandomInt();
        await gladiaClient.headlineGeneration({
          text: text_data,
          max_length: max_length_data,
          model: 'michau-t5-base-en-generate-headline',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/headline-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'michau-t5-base-en-generate-headline',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('max_length')).toEqual(String(max_length_data));
      });
    });
  });

  describe('keywordExtraction', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.fromText().toText().keywordExtraction({
          text: text_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/keyword-extraction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.fromText().toText().keywordExtraction({
          text: text_data,
          top_k: top_k_data,
          model: 'fake-model-name' as unknown as TextTextKeywordExtractionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/keyword-extraction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.keywordExtraction({
          text: text_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/keyword-extraction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.keywordExtraction({
          text: text_data,
          top_k: top_k_data,
          model: 'fake-model-name' as unknown as TextTextKeywordExtractionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/keyword-extraction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
  });

  describe('languageCodes', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const language_code_data = getRandomText();
        const display_output_language_data = getRandomText();
        await gladiaClient.fromText().toText().languageCodes({
          language_code: language_code_data,
          display_output_language: display_output_language_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-codes/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('language_code')).toEqual(language_code_data);
        expect(firstCallBody.get('display_output_language')).toEqual(display_output_language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const language_code_data = getRandomText();
        const display_output_language_data = getRandomText();
        await gladiaClient.fromText().toText().languageCodes({
          language_code: language_code_data,
          display_output_language: display_output_language_data,
          model: 'fake-model-name' as unknown as TextTextLanguageCodesModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-codes/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('language_code')).toEqual(language_code_data);
        expect(firstCallBody.get('display_output_language')).toEqual(display_output_language_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const language_code_data = getRandomText();
        const display_output_language_data = getRandomText();
        await gladiaClient.languageCodes({
          language_code: language_code_data,
          display_output_language: display_output_language_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-codes/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('language_code')).toEqual(language_code_data);
        expect(firstCallBody.get('display_output_language')).toEqual(display_output_language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const language_code_data = getRandomText();
        const display_output_language_data = getRandomText();
        await gladiaClient.languageCodes({
          language_code: language_code_data,
          display_output_language: display_output_language_data,
          model: 'fake-model-name' as unknown as TextTextLanguageCodesModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-codes/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('language_code')).toEqual(language_code_data);
        expect(firstCallBody.get('display_output_language')).toEqual(display_output_language_data);
      });
    });
  });

  describe('languageDetection', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().languageDetection({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().languageDetection({
          text: text_data,
          model: 'toftrup-etal-2021',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'toftrup-etal-2021',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.languageDetection({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.languageDetection({
          text: text_data,
          model: 'toftrup-etal-2021',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'toftrup-etal-2021',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('languageGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().languageGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().languageGeneration({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextLanguageGenerationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.languageGeneration({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.languageGeneration({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextLanguageGenerationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('namedEntityRecognition', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().namedEntityRecognition({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/named-entity-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().namedEntityRecognition({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextNamedEntityRecognitionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/named-entity-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.namedEntityRecognition({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/named-entity-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.namedEntityRecognition({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextNamedEntityRecognitionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/named-entity-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('nextWordPrediction', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.fromText().toText().nextWordPrediction({
          sentence: sentence_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.fromText().toText().nextWordPrediction({
          sentence: sentence_data,
          top_k: top_k_data,
          model: 'fake-model-name' as unknown as TextTextNextWordPredictionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.nextWordPrediction({
          sentence: sentence_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.nextWordPrediction({
          sentence: sentence_data,
          top_k: top_k_data,
          model: 'fake-model-name' as unknown as TextTextNextWordPredictionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
  });

  describe('productOwnership', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().productOwnership({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/product-ownership/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().productOwnership({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextProductOwnershipModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/product-ownership/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.productOwnership({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/product-ownership/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.productOwnership({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextProductOwnershipModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/product-ownership/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('productSentiment', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().productSentiment({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/product-sentiment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().productSentiment({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextProductSentimentModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/product-sentiment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.productSentiment({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/product-sentiment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.productSentiment({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextProductSentimentModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/product-sentiment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('punctuationRestoration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        await gladiaClient.fromText().toText().punctuationRestoration({
          sentence: sentence_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/punctuation-restoration/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        await gladiaClient.fromText().toText().punctuationRestoration({
          sentence: sentence_data,
          model: 'fake-model-name' as unknown as TextTextPunctuationRestorationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/punctuation-restoration/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        await gladiaClient.punctuationRestoration({
          sentence: sentence_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/punctuation-restoration/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        await gladiaClient.punctuationRestoration({
          sentence: sentence_data,
          model: 'fake-model-name' as unknown as TextTextPunctuationRestorationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/punctuation-restoration/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
    });
  });

  describe('questionAnswering', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.fromText().toText().questionAnswering({
          context: context_data,
          question: question_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.fromText().toText().questionAnswering({
          context: context_data,
          question: question_data,
          top_k: top_k_data,
          model: 'fake-model-name' as unknown as TextTextQuestionAnsweringModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.questionAnswering({
          context: context_data,
          question: question_data,
          top_k: top_k_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        const question_data = getRandomText();
        const top_k_data = getRandomInt();
        await gladiaClient.questionAnswering({
          context: context_data,
          question: question_data,
          top_k: top_k_data,
          model: 'fake-model-name' as unknown as TextTextQuestionAnsweringModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
  });

  describe('sentimentAnalysis', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const texts_data = getRandomArray();
        await gladiaClient.fromText().toText().sentimentAnalysis({
          texts: texts_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('texts')).toEqual(texts_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const texts_data = getRandomArray();
        await gladiaClient.fromText().toText().sentimentAnalysis({
          texts: texts_data,
          model: 'fake-model-name' as unknown as TextTextSentimentAnalysisModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('texts')).toEqual(texts_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const texts_data = getRandomArray();
        await gladiaClient.sentimentAnalysis({
          texts: texts_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('texts')).toEqual(texts_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const texts_data = getRandomArray();
        await gladiaClient.sentimentAnalysis({
          texts: texts_data,
          model: 'fake-model-name' as unknown as TextTextSentimentAnalysisModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('texts')).toEqual(texts_data);
      });
    });
  });

  describe('similarity', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        await gladiaClient.fromText().toText().similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/similarity/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        await gladiaClient.fromText().toText().similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as unknown as TextTextSimilarityModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/similarity/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        await gladiaClient.similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/similarity/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_1_data = getRandomText();
        const sentence_2_data = getRandomText();
        await gladiaClient.similarity({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as unknown as TextTextSimilarityModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/similarity/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('sentence_1')).toEqual(sentence_1_data);
        expect(firstCallBody.get('sentence_2')).toEqual(sentence_2_data);
      });
    });
  });

  describe('speakerRecognition', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().speakerRecognition({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/speaker-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().speakerRecognition({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextSpeakerRecognitionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/speaker-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.speakerRecognition({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/speaker-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.speakerRecognition({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextSpeakerRecognitionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/speaker-recognition/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('translation', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const target_data = getRandomText();
        await gladiaClient.fromText().toText().translation({
          text: text_data,
          target: target_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('target')).toEqual(target_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const target_data = getRandomText();
        await gladiaClient.fromText().toText().translation({
          text: text_data,
          target: target_data,
          model: 'fake-model-name' as unknown as TextTextTranslationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('target')).toEqual(target_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const target_data = getRandomText();
        await gladiaClient.translation({
          text: text_data,
          target: target_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('target')).toEqual(target_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const target_data = getRandomText();
        await gladiaClient.translation({
          text: text_data,
          target: target_data,
          model: 'fake-model-name' as unknown as TextTextTranslationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('target')).toEqual(target_data);
      });
    });
  });

  describe('vatCountryGuessing', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().vatCountryGuessing({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/vat-country-guessing/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().vatCountryGuessing({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextVatCountryGuessingModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/vat-country-guessing/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.vatCountryGuessing({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/vat-country-guessing/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.vatCountryGuessing({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextVatCountryGuessingModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/vat-country-guessing/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

  describe('websiteClassification', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().websiteClassification({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/website-classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().websiteClassification({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextWebsiteClassificationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/website-classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.websiteClassification({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/website-classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.websiteClassification({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextWebsiteClassificationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/website-classification/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
    });
  });

});
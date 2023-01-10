/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import {
  TextTextAddressFormattingModel,
  TextTextAgeFromNameModel,
  TextTextAnonymizationModel,
  TextTextAutocorrectModel,
  TextTextBulletPointGenerationModel,
  TextTextCommandGenerationModel,
  TextTextCompanyCategorizationModel,
  TextTextCompanyNameNormalizationModel,
  TextTextCompanyStockCodeModel,
  TextTextConversationSummarizationModel,
  TextTextCountryFromNameModel,
  TextTextDateCleaningModel,
  TextTextEmotionRecognitionModel,
  TextTextGenderFromNameModel,
  TextTextGpsAddressFormattingModel,
  TextTextGpt3Model,
  TextTextGuessCityModel,
  TextTextGuessCountryModel,
  TextTextGuessIntentModel,
  TextTextImageGenerationPromptBeautifierModel,
  TextTextKeywordExtractionModel,
  TextTextLanguageCodesModel,
  TextTextNamedEntityRecognitionModel,
  TextTextNextSentencePredictionModel,
  TextTextProductOwnershipModel,
  TextTextProductSentimentModel,
  TextTextProgrammingLanguageGenerationModel,
  TextTextPunctuationRestorationModel,
  TextTextSimilarityModel,
  TextTextSpeakerRecognitionModel,
  TextTextSummarizationModel,
  TextTextVatCountryGuessingModel,
  TextTextWebsiteClassificationModel,
  TextTextWordAlignmentModel,
} from '../src/models';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomArray, getRandomFloat, getRandomInt, getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromTextToText', () => {
  describe('addressFormatting', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const address_data = getRandomText();
        await gladiaClient.fromText().toText().addressFormatting({
          address: address_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/address-formatting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('address')).toEqual(address_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const address_data = getRandomText();
        await gladiaClient.fromText().toText().addressFormatting({
          address: address_data,
          model: 'fake-model-name' as unknown as TextTextAddressFormattingModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/address-formatting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('address')).toEqual(address_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const address_data = getRandomText();
        await gladiaClient.addressFormatting({
          address: address_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/address-formatting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('address')).toEqual(address_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const address_data = getRandomText();
        await gladiaClient.addressFormatting({
          address: address_data,
          model: 'fake-model-name' as unknown as TextTextAddressFormattingModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/address-formatting/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('address')).toEqual(address_data);
      });
    });
  });

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

  describe('autocorrect', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const sentence_data = getRandomText();
        await gladiaClient.fromText().toText().autocorrect({
          sentence: sentence_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/autocorrect/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        await gladiaClient.fromText().toText().autocorrect({
          sentence: sentence_data,
          model: 'fake-model-name' as unknown as TextTextAutocorrectModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/autocorrect/');
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
        await gladiaClient.autocorrect({
          sentence: sentence_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/autocorrect/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('sentence')).toEqual(sentence_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const sentence_data = getRandomText();
        await gladiaClient.autocorrect({
          sentence: sentence_data,
          model: 'fake-model-name' as unknown as TextTextAutocorrectModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/autocorrect/');
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

  describe('conversationSummarization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().conversationSummarization({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/conversation-summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.fromText().toText().conversationSummarization({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextConversationSummarizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/conversation-summarization/');
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
        await gladiaClient.conversationSummarization({
          text: text_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/conversation-summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        await gladiaClient.conversationSummarization({
          text: text_data,
          model: 'fake-model-name' as unknown as TextTextConversationSummarizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/conversation-summarization/');
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
          model: 'byt5-base-tweet-hate-detection',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'byt5-base-tweet-hate-detection',
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
          model: 'byt5-base-tweet-hate-detection',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/hate-speech-detection/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'byt5-base-tweet-hate-detection',
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

  describe('imageGenerationPromptBeautifier', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const prompt_data = getRandomText();
        await gladiaClient.fromText().toText().imageGenerationPromptBeautifier({
          prompt: prompt_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/image-generation-prompt-beautifier/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const prompt_data = getRandomText();
        await gladiaClient.fromText().toText().imageGenerationPromptBeautifier({
          prompt: prompt_data,
          model: 'fake-model-name' as unknown as TextTextImageGenerationPromptBeautifierModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/image-generation-prompt-beautifier/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const prompt_data = getRandomText();
        await gladiaClient.imageGenerationPromptBeautifier({
          prompt: prompt_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/image-generation-prompt-beautifier/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const prompt_data = getRandomText();
        await gladiaClient.imageGenerationPromptBeautifier({
          prompt: prompt_data,
          model: 'fake-model-name' as unknown as TextTextImageGenerationPromptBeautifierModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/image-generation-prompt-beautifier/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('prompt')).toEqual(prompt_data);
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
          model: 'EleutherAI-gpt-neo-2_7B',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'EleutherAI-gpt-neo-2_7B',
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
          model: 'EleutherAI-gpt-neo-2_7B',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'EleutherAI-gpt-neo-2_7B',
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

  describe('nextSentencePrediction', () => {
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
        await gladiaClient.fromText().toText().nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-sentence-prediction/');
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
        await gladiaClient.fromText().toText().nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as unknown as TextTextNextSentencePredictionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-sentence-prediction/');
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
        await gladiaClient.nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-sentence-prediction/');
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
        await gladiaClient.nextSentencePrediction({
          sentence_1: sentence_1_data,
          sentence_2: sentence_2_data,
          model: 'fake-model-name' as unknown as TextTextNextSentencePredictionModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-sentence-prediction/');
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
          model: 'albert-base-v2',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'albert-base-v2',
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
          model: 'albert-base-v2',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/next-word-prediction/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'albert-base-v2',
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

  describe('programmingLanguageGeneration', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const code_snippet_data = getRandomText();
        await gladiaClient.fromText().toText().programmingLanguageGeneration({
          code_snippet: code_snippet_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/programming-language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('code_snippet')).toEqual(code_snippet_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const code_snippet_data = getRandomText();
        await gladiaClient.fromText().toText().programmingLanguageGeneration({
          code_snippet: code_snippet_data,
          model: 'fake-model-name' as unknown as TextTextProgrammingLanguageGenerationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/programming-language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('code_snippet')).toEqual(code_snippet_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const code_snippet_data = getRandomText();
        await gladiaClient.programmingLanguageGeneration({
          code_snippet: code_snippet_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/programming-language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('code_snippet')).toEqual(code_snippet_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const code_snippet_data = getRandomText();
        await gladiaClient.programmingLanguageGeneration({
          code_snippet: code_snippet_data,
          model: 'fake-model-name' as unknown as TextTextProgrammingLanguageGenerationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/programming-language-generation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('code_snippet')).toEqual(code_snippet_data);
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
          model: 'deepset-roberta-base-squad2',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'deepset-roberta-base-squad2',
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
          model: 'deepset-roberta-base-squad2',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/question-answering/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'deepset-roberta-base-squad2',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
        expect(firstCallBody.get('question')).toEqual(question_data);
        expect(firstCallBody.get('top_k')).toEqual(String(top_k_data));
      });
    });
  });

  describe('sentenceParaphraser', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        await gladiaClient.fromText().toText().sentenceParaphraser({
          context: context_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentence-paraphraser/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        await gladiaClient.fromText().toText().sentenceParaphraser({
          context: context_data,
          model: 'ramsrigouthamg-t5_sentence_paraphraser',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentence-paraphraser/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'ramsrigouthamg-t5_sentence_paraphraser',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const context_data = getRandomText();
        await gladiaClient.sentenceParaphraser({
          context: context_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentence-paraphraser/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const context_data = getRandomText();
        await gladiaClient.sentenceParaphraser({
          context: context_data,
          model: 'ramsrigouthamg-t5_sentence_paraphraser',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentence-paraphraser/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'ramsrigouthamg-t5_sentence_paraphraser',
        });
        expect(firstCallBody.get('context')).toEqual(context_data);
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
          model: 'distilbert-base-uncased',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'distilbert-base-uncased',
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
          model: 'distilbert-base-uncased',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/sentiment-analysis/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'distilbert-base-uncased',
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

  describe('summarization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const source_language_data = getRandomText();
        const min_length_data = getRandomInt();
        const max_length_data = getRandomInt();
        await gladiaClient.fromText().toText().summarization({
          text: text_data,
          source_language: source_language_data,
          min_length: min_length_data,
          max_length: max_length_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
        expect(firstCallBody.get('min_length')).toEqual(String(min_length_data));
        expect(firstCallBody.get('max_length')).toEqual(String(max_length_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const source_language_data = getRandomText();
        const min_length_data = getRandomInt();
        const max_length_data = getRandomInt();
        await gladiaClient.fromText().toText().summarization({
          text: text_data,
          source_language: source_language_data,
          min_length: min_length_data,
          max_length: max_length_data,
          model: 'fake-model-name' as unknown as TextTextSummarizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
        expect(firstCallBody.get('min_length')).toEqual(String(min_length_data));
        expect(firstCallBody.get('max_length')).toEqual(String(max_length_data));
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const text_data = getRandomText();
        const source_language_data = getRandomText();
        const min_length_data = getRandomInt();
        const max_length_data = getRandomInt();
        await gladiaClient.summarization({
          text: text_data,
          source_language: source_language_data,
          min_length: min_length_data,
          max_length: max_length_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
        expect(firstCallBody.get('min_length')).toEqual(String(min_length_data));
        expect(firstCallBody.get('max_length')).toEqual(String(max_length_data));
      });
      it('should call the api with the text and the specified model', async () => {
        const text_data = getRandomText();
        const source_language_data = getRandomText();
        const min_length_data = getRandomInt();
        const max_length_data = getRandomInt();
        await gladiaClient.summarization({
          text: text_data,
          source_language: source_language_data,
          min_length: min_length_data,
          max_length: max_length_data,
          model: 'fake-model-name' as unknown as TextTextSummarizationModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/summarization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('text')).toEqual(text_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
        expect(firstCallBody.get('min_length')).toEqual(String(min_length_data));
        expect(firstCallBody.get('max_length')).toEqual(String(max_length_data));
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
        const input_string_data = getRandomText();
        const source_language_data = getRandomText();
        const target_language_data = getRandomText();
        await gladiaClient.fromText().toText().translation({
          input_string: input_string_data,
          source_language: source_language_data,
          target_language: target_language_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('input_string')).toEqual(input_string_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
        expect(firstCallBody.get('target_language')).toEqual(target_language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const input_string_data = getRandomText();
        const source_language_data = getRandomText();
        const target_language_data = getRandomText();
        await gladiaClient.fromText().toText().translation({
          input_string: input_string_data,
          source_language: source_language_data,
          target_language: target_language_data,
          model: 'facebook-nllb-200-distilled-600M',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'facebook-nllb-200-distilled-600M',
        });
        expect(firstCallBody.get('input_string')).toEqual(input_string_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
        expect(firstCallBody.get('target_language')).toEqual(target_language_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const input_string_data = getRandomText();
        const source_language_data = getRandomText();
        const target_language_data = getRandomText();
        await gladiaClient.translation({
          input_string: input_string_data,
          source_language: source_language_data,
          target_language: target_language_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('input_string')).toEqual(input_string_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
        expect(firstCallBody.get('target_language')).toEqual(target_language_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const input_string_data = getRandomText();
        const source_language_data = getRandomText();
        const target_language_data = getRandomText();
        await gladiaClient.translation({
          input_string: input_string_data,
          source_language: source_language_data,
          target_language: target_language_data,
          model: 'facebook-nllb-200-distilled-600M',
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/translation/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'facebook-nllb-200-distilled-600M',
        });
        expect(firstCallBody.get('input_string')).toEqual(input_string_data);
        expect(firstCallBody.get('source_language')).toEqual(source_language_data);
        expect(firstCallBody.get('target_language')).toEqual(target_language_data);
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

  describe('wordAlignment', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromText().toText()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        await gladiaClient.fromText().toText().wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/word-alignment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('input_string_language_1')).toEqual(input_string_language_1_data);
        expect(firstCallBody.get('input_string_language_2')).toEqual(input_string_language_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        await gladiaClient.fromText().toText().wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
          model: 'fake-model-name' as unknown as TextTextWordAlignmentModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/word-alignment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('input_string_language_1')).toEqual(input_string_language_1_data);
        expect(firstCallBody.get('input_string_language_2')).toEqual(input_string_language_2_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        await gladiaClient.wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/word-alignment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('input_string_language_1')).toEqual(input_string_language_1_data);
        expect(firstCallBody.get('input_string_language_2')).toEqual(input_string_language_2_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const input_string_language_1_data = getRandomText();
        const input_string_language_2_data = getRandomText();
        await gladiaClient.wordAlignment({
          input_string_language_1: input_string_language_1_data,
          input_string_language_2: input_string_language_2_data,
          model: 'fake-model-name' as unknown as TextTextWordAlignmentModel,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/text/text/word-alignment/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('input_string_language_1')).toEqual(input_string_language_1_data);
        expect(firstCallBody.get('input_string_language_2')).toEqual(input_string_language_2_data);
      });
    });
  });

});
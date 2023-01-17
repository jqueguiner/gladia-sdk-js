"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromTextToText = void 0;
var tslib_1 = require("tslib");
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var FromTextToText = /** @class */ (function () {
    function FromTextToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromTextToText.prototype.addressFormatting = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('address', args.address);
        return this.httpClient.post({
            url: '/text/text/address-formatting/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_ADDRESS_FORMATTING_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.ageFromName = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('name', args.name);
        return this.httpClient.post({
            url: '/text/text/age-from-name/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_AGE_FROM_NAME_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.anonymization = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('language', args.language);
        formData.append('entities', args.entities);
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/anonymization/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_ANONYMIZATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.autocorrect = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('sentence', args.sentence);
        return this.httpClient.post({
            url: '/text/text/autocorrect/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.bulletPointGeneration = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        if ((0, fp_1.isDefined)(args.bullets)) {
            formData.append('bullets', String(args.bullets));
        }
        return this.httpClient.post({
            url: '/text/text/bullet-point-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_BULLET_POINT_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.commandGeneration = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/command-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_COMMAND_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.companyCategorization = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/company-categorization/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_COMPANY_CATEGORIZATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.companyNameNormalization = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/company-name-normalization/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_COMPANY_NAME_NORMALIZATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.companyStockCode = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/company-stock-code/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_COMPANY_STOCK_CODE_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.conversationSummarization = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/conversation-summarization/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_CONVERSATION_SUMMARIZATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.countryFromName = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('name', args.name);
        return this.httpClient.post({
            url: '/text/text/country-from-name/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_COUNTRY_FROM_NAME_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.dateCleaning = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('date', args.date);
        return this.httpClient.post({
            url: '/text/text/date-cleaning/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_DATE_CLEANING_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.emotionRecognition = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('texts', args.texts);
        return this.httpClient.post({
            url: '/text/text/emotion-recognition/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.genderFromName = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('name', args.name);
        return this.httpClient.post({
            url: '/text/text/gender-from-name/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_GENDER_FROM_NAME_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.gpsAddressFormatting = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('latitude', String(args.latitude));
        formData.append('longitude', String(args.longitude));
        return this.httpClient.post({
            url: '/text/text/gps-address-formatting/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_GPS_ADDRESS_FORMATTING_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.gpt3 = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/gpt3/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_GPT3_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.guessCity = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/guess-city/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_GUESS_CITY_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.guessCountry = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/guess-country/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_GUESS_COUNTRY_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.guessIntent = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/guess-intent/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_GUESS_INTENT_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.hateSpeechDetection = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/hate-speech-detection/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.headlineGeneration = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        formData.append('max_length', String(args.max_length));
        return this.httpClient.post({
            url: '/text/text/headline-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_HEADLINE_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.imageGenerationPromptBeautifier = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('prompt', args.prompt);
        return this.httpClient.post({
            url: '/text/text/image-generation-prompt-beautifier/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_IMAGE_GENERATION_PROMPT_BEAUTIFIER_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.keywordExtraction = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        if ((0, fp_1.isDefined)(args.top_k)) {
            formData.append('top_k', String(args.top_k));
        }
        return this.httpClient.post({
            url: '/text/text/keyword-extraction/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.languageCodes = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('language_code', args.language_code);
        formData.append('display_output_language', args.display_output_language);
        return this.httpClient.post({
            url: '/text/text/language-codes/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_LANGUAGE_CODES_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.languageDetection = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/language-detection/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.languageGeneration = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/language-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.namedEntityRecognition = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/named-entity-recognition/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.nextSentencePrediction = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('sentence_1', args.sentence_1);
        formData.append('sentence_2', args.sentence_2);
        return this.httpClient.post({
            url: '/text/text/next-sentence-prediction/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.nextWordPrediction = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('sentence', args.sentence);
        formData.append('top_k', String(args.top_k));
        return this.httpClient.post({
            url: '/text/text/next-word-prediction/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.productOwnership = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/product-ownership/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_PRODUCT_OWNERSHIP_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.productSentiment = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/product-sentiment/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_PRODUCT_SENTIMENT_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.programmingLanguageGeneration = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('code_snippet', args.code_snippet);
        return this.httpClient.post({
            url: '/text/text/programming-language-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.punctuationRestoration = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('sentence', args.sentence);
        return this.httpClient.post({
            url: '/text/text/punctuation-restoration/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_PUNCTUATION_RESTORATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.questionAnswering = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('context', args.context);
        formData.append('question', args.question);
        if ((0, fp_1.isDefined)(args.top_k)) {
            formData.append('top_k', String(args.top_k));
        }
        return this.httpClient.post({
            url: '/text/text/question-answering/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.sentenceParaphraser = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('context', args.context);
        return this.httpClient.post({
            url: '/text/text/sentence-paraphraser/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.sentimentAnalysis = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('texts', args.texts);
        return this.httpClient.post({
            url: '/text/text/sentiment-analysis/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.similarity = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('sentence_1', args.sentence_1);
        formData.append('sentence_2', args.sentence_2);
        return this.httpClient.post({
            url: '/text/text/similarity/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_SIMILARITY_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.speakerRecognition = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/speaker-recognition/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_SPEAKER_RECOGNITION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.summarization = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        formData.append('source_language', args.source_language);
        if ((0, fp_1.isDefined)(args.min_length)) {
            formData.append('min_length', String(args.min_length));
        }
        if ((0, fp_1.isDefined)(args.max_length)) {
            formData.append('max_length', String(args.max_length));
        }
        return this.httpClient.post({
            url: '/text/text/summarization/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_SUMMARIZATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.translation = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('input_string', args.input_string);
        formData.append('source_language', args.source_language);
        formData.append('target_language', args.target_language);
        return this.httpClient.post({
            url: '/text/text/translation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_TRANSLATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.vatCountryGuessing = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/vat-country-guessing/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_VAT_COUNTRY_GUESSING_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.websiteClassification = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/website-classification/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_WEBSITE_CLASSIFICATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.wordAlignment = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
        formData.append('input_string_language_1', args.input_string_language_1);
        formData.append('input_string_language_2', args.input_string_language_2);
        return this.httpClient.post({
            url: '/text/text/word-alignment/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    return FromTextToText;
}());
exports.FromTextToText = FromTextToText;

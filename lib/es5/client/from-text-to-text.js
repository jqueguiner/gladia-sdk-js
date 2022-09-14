"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromTextToText = void 0;
var tslib_1 = require("tslib");
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var url_form_data_1 = require("../internal/url-form-data");
var FromTextToText = /** @class */ (function () {
    function FromTextToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromTextToText.prototype.adGeneration = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.keywords)) {
            formData.append('keywords', args.keywords);
        }
        return this.httpClient.post({
            url: '/text/text/ad-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_AD_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.articleGeneration = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.title)) {
            formData.append('title', args.title);
        }
        return this.httpClient.post({
            url: '/text/text/article-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_ARTICLE_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.autocorrect = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
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
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/bullet-point-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_BULLET_POINT_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.emotionRecognition = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/emotion-recognition/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.hateSpeechDetection = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
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
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/headline-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_HEADLINE_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.intentClassification = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/intent-classification/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_INTENT_CLASSIFICATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.keywordExtraction = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
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
    FromTextToText.prototype.languageDetection = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
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
        var formData = new url_form_data_1.UrlFormData();
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
        var formData = new url_form_data_1.UrlFormData();
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
        var formData = new url_form_data_1.UrlFormData();
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
        var formData = new url_form_data_1.UrlFormData();
        formData.append('sentence', args.sentence);
        if ((0, fp_1.isDefined)(args.top_k)) {
            formData.append('top_k', String(args.top_k));
        }
        return this.httpClient.post({
            url: '/text/text/next-word-prediction/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.plural = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        formData.append('word', args.word);
        if ((0, fp_1.isDefined)(args.count)) {
            formData.append('count', String(args.count));
        }
        return this.httpClient.post({
            url: '/text/text/plural/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_PLURAL_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.programmingLanguageGeneration = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        formData.append('code_snippet', args.code_snippet);
        return this.httpClient.post({
            url: '/text/text/programming-language-generation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.questionAnswering = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
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
        var formData = new url_form_data_1.UrlFormData();
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
        var formData = new url_form_data_1.UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/sentiment-analysis/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.similarity = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        formData.append('sentence_1', args.sentence_1);
        formData.append('sentence_2', args.sentence_2);
        return this.httpClient.post({
            url: '/text/text/similarity/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_SIMILARITY_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.summarization = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
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
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        if ((0, fp_1.isDefined)(args.source)) {
            formData.append('source', args.source);
        }
        if ((0, fp_1.isDefined)(args.target)) {
            formData.append('target', args.target);
        }
        return this.httpClient.post({
            url: '/text/text/translation/',
            headers: tslib_1.__assign({ 'Content-Type': models_1.TEXT_TEXT_TRANSLATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.wordAlignment = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
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

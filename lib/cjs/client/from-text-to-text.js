"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromTextToText = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var FromTextToText = /** @class */ (function () {
    function FromTextToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromTextToText.prototype.autocorrect = function (args) {
        return this.httpClient.post({
            url: '/text/text/autocorrect/',
            query: __assign({ model: models_1.TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.emotionRecognition = function (args) {
        return this.httpClient.post({
            url: '/text/text/emotion-recognition/',
            query: __assign({ model: models_1.TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.hateSpeechDetection = function (args) {
        return this.httpClient.post({
            url: '/text/text/hate-speech-detection/',
            query: __assign({ model: models_1.TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.keywordExtraction = function (args) {
        return this.httpClient.post({
            url: '/text/text/keyword-extraction/',
            query: __assign({ model: models_1.TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.languageDetection = function (args) {
        return this.httpClient.post({
            url: '/text/text/language-detection/',
            query: __assign({ model: models_1.TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.languageGeneration = function (args) {
        return this.httpClient.post({
            url: '/text/text/language-generation/',
            query: __assign({ model: models_1.TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.namedEntityRecognition = function (args) {
        return this.httpClient.post({
            url: '/text/text/named-entity-recognition/',
            query: __assign({ model: models_1.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.nextSentencePrediction = function (args) {
        return this.httpClient.post({
            url: '/text/text/next-sentence-prediction/',
            query: __assign({ model: models_1.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.nextWordPrediction = function (args) {
        return this.httpClient.post({
            url: '/text/text/next-word-prediction/',
            query: __assign({ model: models_1.TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.plural = function (args) {
        return this.httpClient.post({
            url: '/text/text/plural/',
            query: __assign({ model: models_1.TEXT_TEXT_PLURAL_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.programmingLanguageGeneration = function (args) {
        return this.httpClient.post({
            url: '/text/text/programming-language-generation/',
            query: __assign({ model: models_1.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.questionAnswering = function (args) {
        return this.httpClient.post({
            url: '/text/text/question-answering/',
            query: __assign({ model: models_1.TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.sentenceParaphraser = function (args) {
        return this.httpClient.post({
            url: '/text/text/sentence-paraphraser/',
            query: __assign({ model: models_1.TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.sentimentAnalysis = function (args) {
        return this.httpClient.post({
            url: '/text/text/sentiment-analysis/',
            query: __assign({ model: models_1.TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.similarity = function (args) {
        return this.httpClient.post({
            url: '/text/text/similarity/',
            query: __assign({ model: models_1.TEXT_TEXT_SIMILARITY_DEFAULT_MODEL }, args),
        });
    };
    FromTextToText.prototype.wordAlignment = function (args) {
        return this.httpClient.post({
            url: '/text/text/word-alignment/',
            query: __assign({ model: models_1.TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL }, args),
        });
    };
    return FromTextToText;
}());
exports.FromTextToText = FromTextToText;

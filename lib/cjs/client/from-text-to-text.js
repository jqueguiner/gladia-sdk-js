"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
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
        var _a;
        var formData = new FormData();
        formData.append('sentence', args.sentence);
        return this.httpClient.post({
            url: '/text/text/autocorrect/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.emotionRecognition = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/emotion-recognition/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.hateSpeechDetection = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/hate-speech-detection/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.keywordExtraction = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/keyword-extraction/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.languageDetection = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/language-detection/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.languageGeneration = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/language-generation/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.namedEntityRecognition = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/named-entity-recognition/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.nextSentencePrediction = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('sentence_1', args.sentence_1);
        formData.append('sentence_2', args.sentence_2);
        return this.httpClient.post({
            url: '/text/text/next-sentence-prediction/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.nextWordPrediction = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('sentence', args.sentence);
        return this.httpClient.post({
            url: '/text/text/next-word-prediction/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.plural = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('word', args.word);
        formData.append('count', String(args.count));
        return this.httpClient.post({
            url: '/text/text/plural/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_PLURAL_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.programmingLanguageGeneration = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('code_snippet', args.code_snippet);
        return this.httpClient.post({
            url: '/text/text/programming-language-generation/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.questionAnswering = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('context', args.context);
        formData.append('question', args.question);
        return this.httpClient.post({
            url: '/text/text/question-answering/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.sentenceParaphraser = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('context', args.context);
        return this.httpClient.post({
            url: '/text/text/sentence-paraphraser/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.sentimentAnalysis = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/sentiment-analysis/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.similarity = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('sentence_1', args.sentence_1);
        formData.append('sentence_2', args.sentence_2);
        return this.httpClient.post({
            url: '/text/text/similarity/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromTextToText.prototype.wordAlignment = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('input_string_language_1', args.input_string_language_1);
        formData.append('input_string_language_2', args.input_string_language_2);
        return this.httpClient.post({
            url: '/text/text/word-alignment/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    return FromTextToText;
}());
exports.FromTextToText = FromTextToText;

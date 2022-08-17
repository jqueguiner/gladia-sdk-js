"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromTextToText = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var url_form_data_1 = require("../internal/url-form-data");
var FromTextToText = /** @class */ (function () {
    function FromTextToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromTextToText.prototype.autocorrect = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.sentence)) {
            formData.append('sentence', args.sentence);
        }
        return this.httpClient.post({
            url: '/text/text/autocorrect/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.emotionRecognition = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/emotion-recognition/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.hateSpeechDetection = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/hate-speech-detection/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.keywordExtraction = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/keyword-extraction/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.languageDetection = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/language-detection/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.languageGeneration = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/language-generation/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.namedEntityRecognition = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/named-entity-recognition/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.nextSentencePrediction = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.sentence_1)) {
            formData.append('sentence_1', args.sentence_1);
        }
        if ((0, fp_1.isDefined)(args.sentence_2)) {
            formData.append('sentence_2', args.sentence_2);
        }
        return this.httpClient.post({
            url: '/text/text/next-sentence-prediction/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.nextWordPrediction = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.sentence)) {
            formData.append('sentence', args.sentence);
        }
        return this.httpClient.post({
            url: '/text/text/next-word-prediction/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.plural = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.word)) {
            formData.append('word', args.word);
        }
        if ((0, fp_1.isDefined)(args.count)) {
            formData.append('count', String(args.count));
        }
        return this.httpClient.post({
            url: '/text/text/plural/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_PLURAL_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_PLURAL_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.programmingLanguageGeneration = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.code_snippet)) {
            formData.append('code_snippet', args.code_snippet);
        }
        return this.httpClient.post({
            url: '/text/text/programming-language-generation/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.questionAnswering = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.context)) {
            formData.append('context', args.context);
        }
        if ((0, fp_1.isDefined)(args.question)) {
            formData.append('question', args.question);
        }
        return this.httpClient.post({
            url: '/text/text/question-answering/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.sentenceParaphraser = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.context)) {
            formData.append('context', args.context);
        }
        return this.httpClient.post({
            url: '/text/text/sentence-paraphraser/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.sentimentAnalysis = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.text)) {
            formData.append('text', args.text);
        }
        return this.httpClient.post({
            url: '/text/text/sentiment-analysis/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.similarity = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.sentence_1)) {
            formData.append('sentence_1', args.sentence_1);
        }
        if ((0, fp_1.isDefined)(args.sentence_2)) {
            formData.append('sentence_2', args.sentence_2);
        }
        return this.httpClient.post({
            url: '/text/text/similarity/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_SIMILARITY_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    FromTextToText.prototype.wordAlignment = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        if ((0, fp_1.isDefined)(args.input_string_language_1)) {
            formData.append('input_string_language_1', args.input_string_language_1);
        }
        if ((0, fp_1.isDefined)(args.input_string_language_2)) {
            formData.append('input_string_language_2', args.input_string_language_2);
        }
        return this.httpClient.post({
            url: '/text/text/word-alignment/',
            headers: { 'Content-Type': models_1.TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    };
    return FromTextToText;
}());
exports.FromTextToText = FromTextToText;

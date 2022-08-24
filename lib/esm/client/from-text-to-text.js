/* Generated file with "scripts/generate-sdk.ts" */
import { TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE, TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL, TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE, TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL, TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE, TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL, TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE, TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL, TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE, TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL, TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE, TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL, TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE, TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL, TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE, TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL, TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE, TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL, TEXT_TEXT_PLURAL_CONTENT_TYPE, TEXT_TEXT_PLURAL_DEFAULT_MODEL, TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE, TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL, TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE, TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL, TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE, TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL, TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE, TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL, TEXT_TEXT_SIMILARITY_CONTENT_TYPE, TEXT_TEXT_SIMILARITY_DEFAULT_MODEL, TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE, TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL, } from '../models';
import { getHttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { UrlFormData } from '../internal/url-form-data';
export class FromTextToText {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    autocorrect(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('sentence', args.sentence);
        return this.httpClient.post({
            url: '/text/text/autocorrect/',
            headers: { 'Content-Type': TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    emotionRecognition(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/emotion-recognition/',
            headers: { 'Content-Type': TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    hateSpeechDetection(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/hate-speech-detection/',
            headers: { 'Content-Type': TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    keywordExtraction(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/keyword-extraction/',
            headers: { 'Content-Type': TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    languageDetection(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/language-detection/',
            headers: { 'Content-Type': TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    languageGeneration(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/language-generation/',
            headers: { 'Content-Type': TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    namedEntityRecognition(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/named-entity-recognition/',
            headers: { 'Content-Type': TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    nextSentencePrediction(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('sentence_1', args.sentence_1);
        formData.append('sentence_2', args.sentence_2);
        return this.httpClient.post({
            url: '/text/text/next-sentence-prediction/',
            headers: { 'Content-Type': TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    nextWordPrediction(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('sentence', args.sentence);
        return this.httpClient.post({
            url: '/text/text/next-word-prediction/',
            headers: { 'Content-Type': TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    plural(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('word', args.word);
        if (isDefined(args.count)) {
            formData.append('count', String(args.count));
        }
        return this.httpClient.post({
            url: '/text/text/plural/',
            headers: { 'Content-Type': TEXT_TEXT_PLURAL_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_PLURAL_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    programmingLanguageGeneration(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('code_snippet', args.code_snippet);
        return this.httpClient.post({
            url: '/text/text/programming-language-generation/',
            headers: { 'Content-Type': TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    questionAnswering(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('context', args.context);
        formData.append('question', args.question);
        return this.httpClient.post({
            url: '/text/text/question-answering/',
            headers: { 'Content-Type': TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    sentenceParaphraser(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('context', args.context);
        return this.httpClient.post({
            url: '/text/text/sentence-paraphraser/',
            headers: { 'Content-Type': TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    sentimentAnalysis(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('text', args.text);
        return this.httpClient.post({
            url: '/text/text/sentiment-analysis/',
            headers: { 'Content-Type': TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    similarity(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('sentence_1', args.sentence_1);
        formData.append('sentence_2', args.sentence_2);
        return this.httpClient.post({
            url: '/text/text/similarity/',
            headers: { 'Content-Type': TEXT_TEXT_SIMILARITY_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
    wordAlignment(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('input_string_language_1', args.input_string_language_1);
        formData.append('input_string_language_2', args.input_string_language_2);
        return this.httpClient.post({
            url: '/text/text/word-alignment/',
            headers: { 'Content-Type': TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
            },
            body: formData.toString(),
        });
    }
}

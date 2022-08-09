/* Generated file with "scripts/generate-sdk.ts" */
import { TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL, TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL, TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL, TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL, TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL, TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL, TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL, TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL, TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL, TEXT_TEXT_PLURAL_DEFAULT_MODEL, TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL, TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL, TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL, TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL, TEXT_TEXT_SIMILARITY_DEFAULT_MODEL, TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL, } from '../models';
import { getHttpClient } from '../internal/http-client';
export class FromTextToText {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    autocorrect(args) {
        return this.httpClient.post({
            url: '/text/text/autocorrect/',
            query: {
                model: TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    emotionRecognition(args) {
        return this.httpClient.post({
            url: '/text/text/emotion-recognition/',
            query: {
                model: TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    hateSpeechDetection(args) {
        return this.httpClient.post({
            url: '/text/text/hate-speech-detection/',
            query: {
                model: TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    keywordExtraction(args) {
        return this.httpClient.post({
            url: '/text/text/keyword-extraction/',
            query: {
                model: TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    languageDetection(args) {
        return this.httpClient.post({
            url: '/text/text/language-detection/',
            query: {
                model: TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    languageGeneration(args) {
        return this.httpClient.post({
            url: '/text/text/language-generation/',
            query: {
                model: TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    namedEntityRecognition(args) {
        return this.httpClient.post({
            url: '/text/text/named-entity-recognition/',
            query: {
                model: TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    nextSentencePrediction(args) {
        return this.httpClient.post({
            url: '/text/text/next-sentence-prediction/',
            query: {
                model: TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    nextWordPrediction(args) {
        return this.httpClient.post({
            url: '/text/text/next-word-prediction/',
            query: {
                model: TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    plural(args) {
        return this.httpClient.post({
            url: '/text/text/plural/',
            query: {
                model: TEXT_TEXT_PLURAL_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    programmingLanguageGeneration(args) {
        return this.httpClient.post({
            url: '/text/text/programming-language-generation/',
            query: {
                model: TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    questionAnswering(args) {
        return this.httpClient.post({
            url: '/text/text/question-answering/',
            query: {
                model: TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    sentenceParaphraser(args) {
        return this.httpClient.post({
            url: '/text/text/sentence-paraphraser/',
            query: {
                model: TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    sentimentAnalysis(args) {
        return this.httpClient.post({
            url: '/text/text/sentiment-analysis/',
            query: {
                model: TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    similarity(args) {
        return this.httpClient.post({
            url: '/text/text/similarity/',
            query: {
                model: TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
                ...args,
            },
        });
    }
    wordAlignment(args) {
        return this.httpClient.post({
            url: '/text/text/word-alignment/',
            query: {
                model: TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
                ...args,
            },
        });
    }
}

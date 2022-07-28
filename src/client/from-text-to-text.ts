/* Generated file with "scripts/generate-sdk.ts" */

import {
  TextTextAutocorrectInputs,
  TextTextEmotionRecognitionInputs,
  TextTextHateSpeechDetectionInputs,
  TextTextKeywordExtractionInputs,
  TextTextLanguageDetectionInputs,
  TextTextLanguageGenerationInputs,
  TextTextNamedEntityRecognitionInputs,
  TextTextNextSentencePredictionInputs,
  TextTextNextWordPredictionInputs,
  TextTextPluralInputs,
  TextTextProgrammingLanguageGenerationInputs,
  TextTextQuestionAnsweringInputs,
  TextTextSentenceParaphraserInputs,
  TextTextSentimentAnalysisInputs,
  TextTextSimilarityInputs,
  TextTextWordAlignmentInputs,
} from './input-models'
import {
  TextTextAutocorrectOutputs,
  TextTextEmotionRecognitionOutputs,
  TextTextHateSpeechDetectionOutputs,
  TextTextKeywordExtractionOutputs,
  TextTextLanguageDetectionOutputs,
  TextTextLanguageGenerationOutputs,
  TextTextNamedEntityRecognitionOutputs,
  TextTextNextSentencePredictionOutputs,
  TextTextNextWordPredictionOutputs,
  TextTextPluralOutputs,
  TextTextProgrammingLanguageGenerationOutputs,
  TextTextQuestionAnsweringOutputs,
  TextTextSentenceParaphraserOutputs,
  TextTextSentimentAnalysisOutputs,
  TextTextSimilarityOutputs,
  TextTextWordAlignmentOutputs,
} from './output-models'
import {
  TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
  TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
  TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
  TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
  TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
  TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
  TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
  TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
  TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
  TEXT_TEXT_PLURAL_DEFAULT_MODEL,
  TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
  TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
  TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
  TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
  TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
  TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
} from '../models'
import { getHttpClient, HttpClient } from '../internal/http-client';
import { GladiaClientParams } from './gladia-client-params';

export class FromTextToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs> {
    return this.httpClient.post({
      url: '/text/text/autocorrect/',
      query: {
        model: TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs> {
    return this.httpClient.post({
      url: '/text/text/emotion-recognition/',
      query: {
        model: TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs> {
    return this.httpClient.post({
      url: '/text/text/hate-speech-detection/',
      query: {
        model: TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs> {
    return this.httpClient.post({
      url: '/text/text/keyword-extraction/',
      query: {
        model: TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs> {
    return this.httpClient.post({
      url: '/text/text/language-detection/',
      query: {
        model: TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs> {
    return this.httpClient.post({
      url: '/text/text/language-generation/',
      query: {
        model: TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs> {
    return this.httpClient.post({
      url: '/text/text/named-entity-recognition/',
      query: {
        model: TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs> {
    return this.httpClient.post({
      url: '/text/text/next-sentence-prediction/',
      query: {
        model: TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs> {
    return this.httpClient.post({
      url: '/text/text/next-word-prediction/',
      query: {
        model: TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  plural(args: TextTextPluralInputs): Promise<TextTextPluralOutputs> {
    return this.httpClient.post({
      url: '/text/text/plural/',
      query: {
        model: TEXT_TEXT_PLURAL_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs> {
    return this.httpClient.post({
      url: '/text/text/programming-language-generation/',
      query: {
        model: TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs> {
    return this.httpClient.post({
      url: '/text/text/question-answering/',
      query: {
        model: TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs> {
    return this.httpClient.post({
      url: '/text/text/sentence-paraphraser/',
      query: {
        model: TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs> {
    return this.httpClient.post({
      url: '/text/text/sentiment-analysis/',
      query: {
        model: TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs> {
    return this.httpClient.post({
      url: '/text/text/similarity/',
      query: {
        model: TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
        ...args,
      },
    });
  }

  wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs> {
    return this.httpClient.post({
      url: '/text/text/word-alignment/',
      query: {
        model: TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
        ...args,
      },
    });
  }

}

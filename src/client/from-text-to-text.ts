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
    const formData = new FormData();
    formData.append('sentence', args.sentence);
    return this.httpClient.post({
      url: '/text/text/autocorrect/',
      query: {
        model: args.model ?? TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs> {
    const formData = new FormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/emotion-recognition/',
      query: {
        model: args.model ?? TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs> {
    const formData = new FormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/hate-speech-detection/',
      query: {
        model: args.model ?? TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs> {
    const formData = new FormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/keyword-extraction/',
      query: {
        model: args.model ?? TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs> {
    const formData = new FormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/language-detection/',
      query: {
        model: args.model ?? TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs> {
    const formData = new FormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/language-generation/',
      query: {
        model: args.model ?? TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs> {
    const formData = new FormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/named-entity-recognition/',
      query: {
        model: args.model ?? TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs> {
    const formData = new FormData();
    formData.append('sentence_1', args.sentence_1);
    formData.append('sentence_2', args.sentence_2);
    return this.httpClient.post({
      url: '/text/text/next-sentence-prediction/',
      query: {
        model: args.model ?? TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs> {
    const formData = new FormData();
    formData.append('sentence', args.sentence);
    return this.httpClient.post({
      url: '/text/text/next-word-prediction/',
      query: {
        model: args.model ?? TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  plural(args: TextTextPluralInputs): Promise<TextTextPluralOutputs> {
    const formData = new FormData();
    formData.append('word', args.word);
    formData.append('count', String(args.count));
    return this.httpClient.post({
      url: '/text/text/plural/',
      query: {
        model: args.model ?? TEXT_TEXT_PLURAL_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs> {
    const formData = new FormData();
    formData.append('code_snippet', args.code_snippet);
    return this.httpClient.post({
      url: '/text/text/programming-language-generation/',
      query: {
        model: args.model ?? TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs> {
    const formData = new FormData();
    formData.append('context', args.context);
    formData.append('question', args.question);
    return this.httpClient.post({
      url: '/text/text/question-answering/',
      query: {
        model: args.model ?? TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs> {
    const formData = new FormData();
    formData.append('context', args.context);
    return this.httpClient.post({
      url: '/text/text/sentence-paraphraser/',
      query: {
        model: args.model ?? TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs> {
    const formData = new FormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/sentiment-analysis/',
      query: {
        model: args.model ?? TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs> {
    const formData = new FormData();
    formData.append('sentence_1', args.sentence_1);
    formData.append('sentence_2', args.sentence_2);
    return this.httpClient.post({
      url: '/text/text/similarity/',
      query: {
        model: args.model ?? TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs> {
    const formData = new FormData();
    formData.append('input_string_language_1', args.input_string_language_1);
    formData.append('input_string_language_2', args.input_string_language_2);
    return this.httpClient.post({
      url: '/text/text/word-alignment/',
      query: {
        model: args.model ?? TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

}

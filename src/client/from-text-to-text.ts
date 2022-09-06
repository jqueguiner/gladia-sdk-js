/* Generated file with "scripts/generate-sdk.ts" */

import {
  TextTextAdGenerationInputs,
  TextTextArticleGenerationInputs,
  TextTextAutocorrectInputs,
  TextTextEmotionRecognitionInputs,
  TextTextHateSpeechDetectionInputs,
  TextTextIntentClassificationInputs,
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
  TextTextSummarizationInputs,
  TextTextTranslationInputs,
  TextTextWordAlignmentInputs,
} from './input-models';
import {
  TextTextAdGenerationOutputs,
  TextTextArticleGenerationOutputs,
  TextTextAutocorrectOutputs,
  TextTextEmotionRecognitionOutputs,
  TextTextHateSpeechDetectionOutputs,
  TextTextIntentClassificationOutputs,
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
  TextTextSummarizationOutputs,
  TextTextTranslationOutputs,
  TextTextWordAlignmentOutputs,
} from './output-models';
import {
  TEXT_TEXT_AD_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_ARTICLE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE,
  TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE,
  TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE,
  TEXT_TEXT_INTENT_CLASSIFICATION_CONTENT_TYPE,
  TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE,
  TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE,
  TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE,
  TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE,
  TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE,
  TEXT_TEXT_PLURAL_CONTENT_TYPE,
  TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE,
  TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE,
  TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE,
  TEXT_TEXT_SIMILARITY_CONTENT_TYPE,
  TEXT_TEXT_SUMMARIZATION_CONTENT_TYPE,
  TEXT_TEXT_TRANSLATION_CONTENT_TYPE,
  TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { UrlFormData } from '../internal/url-form-data';
import { GladiaClientParams } from './gladia-client-params';

export class FromTextToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  adGeneration(args: TextTextAdGenerationInputs): Promise<TextTextAdGenerationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.keywords)) {
      formData.append('keywords', args.keywords);
    }
    return this.httpClient.post({
      url: '/text/text/ad-generation/',
      headers: {
        'Content-Type': TEXT_TEXT_AD_GENERATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  articleGeneration(args: TextTextArticleGenerationInputs): Promise<TextTextArticleGenerationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.title)) {
      formData.append('title', args.title);
    }
    return this.httpClient.post({
      url: '/text/text/article-generation/',
      headers: {
        'Content-Type': TEXT_TEXT_ARTICLE_GENERATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs> {
    const formData = new UrlFormData();
    formData.append('sentence', args.sentence);
    return this.httpClient.post({
      url: '/text/text/autocorrect/',
      headers: {
        'Content-Type': TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/emotion-recognition/',
      headers: {
        'Content-Type': TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/hate-speech-detection/',
      headers: {
        'Content-Type': TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  intentClassification(args: TextTextIntentClassificationInputs): Promise<TextTextIntentClassificationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/intent-classification/',
      headers: {
        'Content-Type': TEXT_TEXT_INTENT_CLASSIFICATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/keyword-extraction/',
      headers: {
        'Content-Type': TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/language-detection/',
      headers: {
        'Content-Type': TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/language-generation/',
      headers: {
        'Content-Type': TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/named-entity-recognition/',
      headers: {
        'Content-Type': TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs> {
    const formData = new UrlFormData();
    formData.append('sentence_1', args.sentence_1);
    formData.append('sentence_2', args.sentence_2);
    return this.httpClient.post({
      url: '/text/text/next-sentence-prediction/',
      headers: {
        'Content-Type': TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs> {
    const formData = new UrlFormData();
    formData.append('sentence', args.sentence);
    return this.httpClient.post({
      url: '/text/text/next-word-prediction/',
      headers: {
        'Content-Type': TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  plural(args: TextTextPluralInputs): Promise<TextTextPluralOutputs> {
    const formData = new UrlFormData();
    formData.append('word', args.word);
    if (isDefined(args.count)) {
      formData.append('count', String(args.count));
    }
    return this.httpClient.post({
      url: '/text/text/plural/',
      headers: {
        'Content-Type': TEXT_TEXT_PLURAL_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs> {
    const formData = new UrlFormData();
    formData.append('code_snippet', args.code_snippet);
    return this.httpClient.post({
      url: '/text/text/programming-language-generation/',
      headers: {
        'Content-Type': TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs> {
    const formData = new UrlFormData();
    formData.append('context', args.context);
    formData.append('question', args.question);
    return this.httpClient.post({
      url: '/text/text/question-answering/',
      headers: {
        'Content-Type': TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs> {
    const formData = new UrlFormData();
    formData.append('context', args.context);
    return this.httpClient.post({
      url: '/text/text/sentence-paraphraser/',
      headers: {
        'Content-Type': TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/sentiment-analysis/',
      headers: {
        'Content-Type': TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs> {
    const formData = new UrlFormData();
    formData.append('sentence_1', args.sentence_1);
    formData.append('sentence_2', args.sentence_2);
    return this.httpClient.post({
      url: '/text/text/similarity/',
      headers: {
        'Content-Type': TEXT_TEXT_SIMILARITY_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  summarization(args: TextTextSummarizationInputs): Promise<TextTextSummarizationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/summarization/',
      headers: {
        'Content-Type': TEXT_TEXT_SUMMARIZATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    if (isDefined(args.source)) {
      formData.append('source', args.source);
    }
    if (isDefined(args.target)) {
      formData.append('target', args.target);
    }
    return this.httpClient.post({
      url: '/text/text/translation/',
      headers: {
        'Content-Type': TEXT_TEXT_TRANSLATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs> {
    const formData = new UrlFormData();
    formData.append('input_string_language_1', args.input_string_language_1);
    formData.append('input_string_language_2', args.input_string_language_2);
    return this.httpClient.post({
      url: '/text/text/word-alignment/',
      headers: {
        'Content-Type': TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

}

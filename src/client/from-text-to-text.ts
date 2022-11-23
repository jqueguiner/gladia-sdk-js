/* Generated file with "scripts/generate-sdk.ts" */

import {
  TextTextAdGenerationInputs,
  TextTextAddressFormattingInputs,
  TextTextAgeFromNameInputs,
  TextTextAnonymizationInputs,
  TextTextArticleGenerationInputs,
  TextTextAutocorrectInputs,
  TextTextBulletPointGenerationInputs,
  TextTextCommandGenerationInputs,
  TextTextCompanyCategorizationInputs,
  TextTextCompanyNameNormalizationInputs,
  TextTextCompanyStockCodeInputs,
  TextTextConversationSummarizationInputs,
  TextTextCountryFromNameInputs,
  TextTextDateCleaningInputs,
  TextTextEmotionRecognitionInputs,
  TextTextGenderFromNameInputs,
  TextTextGpsAddressFormattingInputs,
  TextTextGpt3Inputs,
  TextTextGuessCityInputs,
  TextTextGuessCountryInputs,
  TextTextHateSpeechDetectionInputs,
  TextTextHeadlineGenerationInputs,
  TextTextIntentClassificationInputs,
  TextTextKeywordExtractionInputs,
  TextTextLanguageDetectionInputs,
  TextTextLanguageGenerationInputs,
  TextTextNamedEntityRecognitionInputs,
  TextTextNextSentencePredictionInputs,
  TextTextNextWordPredictionInputs,
  TextTextProgrammingLanguageGenerationInputs,
  TextTextPunctuationRestorationInputs,
  TextTextQuestionAnsweringInputs,
  TextTextSentenceParaphraserInputs,
  TextTextSentimentAnalysisInputs,
  TextTextSimilarityInputs,
  TextTextSummarizationInputs,
  TextTextTranslationInputs,
  TextTextVatCountryGuessingInputs,
  TextTextWebsiteClassificationInputs,
  TextTextWordAlignmentInputs,
} from './input-models';
import {
  TextTextAdGenerationOutputs,
  TextTextAddressFormattingOutputs,
  TextTextAgeFromNameOutputs,
  TextTextAnonymizationOutputs,
  TextTextArticleGenerationOutputs,
  TextTextAutocorrectOutputs,
  TextTextBulletPointGenerationOutputs,
  TextTextCommandGenerationOutputs,
  TextTextCompanyCategorizationOutputs,
  TextTextCompanyNameNormalizationOutputs,
  TextTextCompanyStockCodeOutputs,
  TextTextConversationSummarizationOutputs,
  TextTextCountryFromNameOutputs,
  TextTextDateCleaningOutputs,
  TextTextEmotionRecognitionOutputs,
  TextTextGenderFromNameOutputs,
  TextTextGpsAddressFormattingOutputs,
  TextTextGpt3Outputs,
  TextTextGuessCityOutputs,
  TextTextGuessCountryOutputs,
  TextTextHateSpeechDetectionOutputs,
  TextTextHeadlineGenerationOutputs,
  TextTextIntentClassificationOutputs,
  TextTextKeywordExtractionOutputs,
  TextTextLanguageDetectionOutputs,
  TextTextLanguageGenerationOutputs,
  TextTextNamedEntityRecognitionOutputs,
  TextTextNextSentencePredictionOutputs,
  TextTextNextWordPredictionOutputs,
  TextTextProgrammingLanguageGenerationOutputs,
  TextTextPunctuationRestorationOutputs,
  TextTextQuestionAnsweringOutputs,
  TextTextSentenceParaphraserOutputs,
  TextTextSentimentAnalysisOutputs,
  TextTextSimilarityOutputs,
  TextTextSummarizationOutputs,
  TextTextTranslationOutputs,
  TextTextVatCountryGuessingOutputs,
  TextTextWebsiteClassificationOutputs,
  TextTextWordAlignmentOutputs,
} from './output-models';
import {
  TEXT_TEXT_AD_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_ADDRESS_FORMATTING_CONTENT_TYPE,
  TEXT_TEXT_AGE_FROM_NAME_CONTENT_TYPE,
  TEXT_TEXT_ANONYMIZATION_CONTENT_TYPE,
  TEXT_TEXT_ARTICLE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE,
  TEXT_TEXT_BULLET_POINT_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_COMMAND_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_COMPANY_CATEGORIZATION_CONTENT_TYPE,
  TEXT_TEXT_COMPANY_NAME_NORMALIZATION_CONTENT_TYPE,
  TEXT_TEXT_COMPANY_STOCK_CODE_CONTENT_TYPE,
  TEXT_TEXT_CONVERSATION_SUMMARIZATION_CONTENT_TYPE,
  TEXT_TEXT_COUNTRY_FROM_NAME_CONTENT_TYPE,
  TEXT_TEXT_DATE_CLEANING_CONTENT_TYPE,
  TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE,
  TEXT_TEXT_GENDER_FROM_NAME_CONTENT_TYPE,
  TEXT_TEXT_GPS_ADDRESS_FORMATTING_CONTENT_TYPE,
  TEXT_TEXT_GPT3_CONTENT_TYPE,
  TEXT_TEXT_GUESS_CITY_CONTENT_TYPE,
  TEXT_TEXT_GUESS_COUNTRY_CONTENT_TYPE,
  TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE,
  TEXT_TEXT_HEADLINE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_INTENT_CLASSIFICATION_CONTENT_TYPE,
  TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE,
  TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE,
  TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE,
  TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE,
  TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE,
  TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_PUNCTUATION_RESTORATION_CONTENT_TYPE,
  TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE,
  TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE,
  TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE,
  TEXT_TEXT_SIMILARITY_CONTENT_TYPE,
  TEXT_TEXT_SUMMARIZATION_CONTENT_TYPE,
  TEXT_TEXT_TRANSLATION_CONTENT_TYPE,
  TEXT_TEXT_VAT_COUNTRY_GUESSING_CONTENT_TYPE,
  TEXT_TEXT_WEBSITE_CLASSIFICATION_CONTENT_TYPE,
  TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient, UrlFormData } from '../internal/http-client';
import { isDefined } from '../utils/fp';
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

  addressFormatting(args: TextTextAddressFormattingInputs): Promise<TextTextAddressFormattingOutputs> {
    const formData = new UrlFormData();
    formData.append('address', args.address);
    return this.httpClient.post({
      url: '/text/text/address-formatting/',
      headers: {
        'Content-Type': TEXT_TEXT_ADDRESS_FORMATTING_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  ageFromName(args: TextTextAgeFromNameInputs): Promise<TextTextAgeFromNameOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.name)) {
      formData.append('name', args.name);
    }
    return this.httpClient.post({
      url: '/text/text/age-from-name/',
      headers: {
        'Content-Type': TEXT_TEXT_AGE_FROM_NAME_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  anonymization(args: TextTextAnonymizationInputs): Promise<TextTextAnonymizationOutputs> {
    const formData = new UrlFormData();
    formData.append('language', args.language);
    formData.append('entities', args.entities);
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/anonymization/',
      headers: {
        'Content-Type': TEXT_TEXT_ANONYMIZATION_CONTENT_TYPE,
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

  bulletPointGeneration(args: TextTextBulletPointGenerationInputs): Promise<TextTextBulletPointGenerationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    if (isDefined(args.bullets)) {
      formData.append('bullets', String(args.bullets));
    }
    return this.httpClient.post({
      url: '/text/text/bullet-point-generation/',
      headers: {
        'Content-Type': TEXT_TEXT_BULLET_POINT_GENERATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  commandGeneration(args: TextTextCommandGenerationInputs): Promise<TextTextCommandGenerationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/command-generation/',
      headers: {
        'Content-Type': TEXT_TEXT_COMMAND_GENERATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  companyCategorization(args: TextTextCompanyCategorizationInputs): Promise<TextTextCompanyCategorizationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/company-categorization/',
      headers: {
        'Content-Type': TEXT_TEXT_COMPANY_CATEGORIZATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  companyNameNormalization(args: TextTextCompanyNameNormalizationInputs): Promise<TextTextCompanyNameNormalizationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/company-name-normalization/',
      headers: {
        'Content-Type': TEXT_TEXT_COMPANY_NAME_NORMALIZATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  companyStockCode(args: TextTextCompanyStockCodeInputs): Promise<TextTextCompanyStockCodeOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/company-stock-code/',
      headers: {
        'Content-Type': TEXT_TEXT_COMPANY_STOCK_CODE_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  conversationSummarization(args: TextTextConversationSummarizationInputs): Promise<TextTextConversationSummarizationOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    return this.httpClient.post({
      url: '/text/text/conversation-summarization/',
      headers: {
        'Content-Type': TEXT_TEXT_CONVERSATION_SUMMARIZATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  countryFromName(args: TextTextCountryFromNameInputs): Promise<TextTextCountryFromNameOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.name)) {
      formData.append('name', args.name);
    }
    return this.httpClient.post({
      url: '/text/text/country-from-name/',
      headers: {
        'Content-Type': TEXT_TEXT_COUNTRY_FROM_NAME_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  dateCleaning(args: TextTextDateCleaningInputs): Promise<TextTextDateCleaningOutputs> {
    const formData = new UrlFormData();
    formData.append('date', args.date);
    return this.httpClient.post({
      url: '/text/text/date-cleaning/',
      headers: {
        'Content-Type': TEXT_TEXT_DATE_CLEANING_CONTENT_TYPE,
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

  genderFromName(args: TextTextGenderFromNameInputs): Promise<TextTextGenderFromNameOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.name)) {
      formData.append('name', args.name);
    }
    return this.httpClient.post({
      url: '/text/text/gender-from-name/',
      headers: {
        'Content-Type': TEXT_TEXT_GENDER_FROM_NAME_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  gpsAddressFormatting(args: TextTextGpsAddressFormattingInputs): Promise<TextTextGpsAddressFormattingOutputs> {
    const formData = new UrlFormData();
    formData.append('latitude', String(args.latitude));
    formData.append('longitude', String(args.longitude));
    return this.httpClient.post({
      url: '/text/text/gps-address-formatting/',
      headers: {
        'Content-Type': TEXT_TEXT_GPS_ADDRESS_FORMATTING_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  gpt3(args: TextTextGpt3Inputs): Promise<TextTextGpt3Outputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/gpt3/',
      headers: {
        'Content-Type': TEXT_TEXT_GPT3_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  guessCity(args: TextTextGuessCityInputs): Promise<TextTextGuessCityOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/guess-city/',
      headers: {
        'Content-Type': TEXT_TEXT_GUESS_CITY_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  guessCountry(args: TextTextGuessCountryInputs): Promise<TextTextGuessCountryOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/guess-country/',
      headers: {
        'Content-Type': TEXT_TEXT_GUESS_COUNTRY_CONTENT_TYPE,
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

  headlineGeneration(args: TextTextHeadlineGenerationInputs): Promise<TextTextHeadlineGenerationOutputs> {
    const formData = new UrlFormData();
    formData.append('text', args.text);
    formData.append('max_length', String(args.max_length));
    return this.httpClient.post({
      url: '/text/text/headline-generation/',
      headers: {
        'Content-Type': TEXT_TEXT_HEADLINE_GENERATION_CONTENT_TYPE,
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
    if (isDefined(args.top_k)) {
      formData.append('top_k', String(args.top_k));
    }
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
    formData.append('top_k', String(args.top_k));
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

  punctuationRestoration(args: TextTextPunctuationRestorationInputs): Promise<TextTextPunctuationRestorationOutputs> {
    const formData = new UrlFormData();
    formData.append('sentence', args.sentence);
    return this.httpClient.post({
      url: '/text/text/punctuation-restoration/',
      headers: {
        'Content-Type': TEXT_TEXT_PUNCTUATION_RESTORATION_CONTENT_TYPE,
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
    if (isDefined(args.top_k)) {
      formData.append('top_k', String(args.top_k));
    }
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
    formData.append('text', args.text);
    formData.append('source_language', args.source_language);
    if (isDefined(args.min_length)) {
      formData.append('min_length', String(args.min_length));
    }
    if (isDefined(args.max_length)) {
      formData.append('max_length', String(args.max_length));
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
    formData.append('input_string', args.input_string);
    formData.append('source_language', args.source_language);
    formData.append('target_language', args.target_language);
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

  vatCountryGuessing(args: TextTextVatCountryGuessingInputs): Promise<TextTextVatCountryGuessingOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/vat-country-guessing/',
      headers: {
        'Content-Type': TEXT_TEXT_VAT_COUNTRY_GUESSING_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData.toString(),
    });
  }

  websiteClassification(args: TextTextWebsiteClassificationInputs): Promise<TextTextWebsiteClassificationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/website-classification/',
      headers: {
        'Content-Type': TEXT_TEXT_WEBSITE_CLASSIFICATION_CONTENT_TYPE,
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

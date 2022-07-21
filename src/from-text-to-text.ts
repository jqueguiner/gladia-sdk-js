import { GladiaClientParams } from "./gladia-client";
import { getHttpClient, HttpClient } from "./http-client";
import {
  TextTextAutocorrectModel,
  TextTextEmotionRecognitionModel,
  TextTextEntityExtractionModel,
  TextTextHateSpeechDetectionModel,
  TextTextKeywordExtractionModel,
  TextTextLanguageDetectionModel,
  TextTextLanguageGenerationModel,
  TextTextNamedEntityRecognitionModel,
  TextTextNextSentencePredictionModel,
  TextTextNextWordPredictionModel,
  TextTextPluralModel,
  TextTextProgrammingLanguageGenerationModel,
  TextTextQuestionAnsweringModel,
  TextTextSentenceParaphraserModel,
  TextTextSentimentAnalysisModel,
  TextTextSimilarityModel,
  TextTextWordAlignmentModel,
  TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
  TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
  TEXT_TEXT_ENTITY_EXTRACTION_DEFAULT_MODEL,
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
} from "./models";
import { WithModel, WithText } from "./types";

export class FromTextToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  autocorrect(
    args: WithText & WithModel<TextTextAutocorrectModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/autocorrect/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
      },
    });
  }
  
  emotionRecognition(
    args: WithText & WithModel<TextTextEmotionRecognitionModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/emotion-recognition/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
      },
    });
  }
  
  entityExtraction(
    args: WithText & WithModel<TextTextEntityExtractionModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/entity-extraction/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_ENTITY_EXTRACTION_DEFAULT_MODEL,
      },
    });
  }
  
  hateSpeechDetection(
    args: WithText & WithModel<TextTextHateSpeechDetectionModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/hate-speech-detection/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
      },
    });
  }
  
  keywordExtraction(
    args: WithText & WithModel<TextTextKeywordExtractionModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/keyword-extraction/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
      },
    });
  }
  
  languageDetection(
    args: WithText & WithModel<TextTextLanguageDetectionModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/language-detection/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
      },
    });
  }
  
  languageGeneration(
    args: WithText & WithModel<TextTextLanguageGenerationModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/language-generation/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
      },
    });
  }
  
  namedEntityRecognition(
    args: WithText & WithModel<TextTextNamedEntityRecognitionModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/named-entity-recognition/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
      },
    });
  }
  
  nextSentencePrediction(
    args: WithText & WithModel<TextTextNextSentencePredictionModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/next-sentence-prediction/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
      },
    });
  }
  
  nextWordPrediction(
    args: WithText & WithModel<TextTextNextWordPredictionModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/next-word-prediction/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
      },
    });
  }
  
  plural(args: WithText & WithModel<TextTextPluralModel>): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/plural/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_PLURAL_DEFAULT_MODEL,
      },
    });
  }
  
  programmingLanguageGeneration(
    args: WithText & WithModel<TextTextProgrammingLanguageGenerationModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/programming-language-generation/",
      query: {
        text: args.text,
        model:
          args.model ?? TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
      },
    });
  }
  
  questionAnswering(
    args: WithText & WithModel<TextTextQuestionAnsweringModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/question-answering/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
      },
    });
  }
  
  sentenceParaphraser(
    args: WithText & WithModel<TextTextSentenceParaphraserModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/sentence-paraphraser/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
      },
    });
  }
  
  sentimentAnalysis(
    args: WithText & WithModel<TextTextSentimentAnalysisModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/sentiment-analysis/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
      },
    });
  }
  
  similarity(
    args: WithText & WithModel<TextTextSimilarityModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/similarity/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
      },
    });
  }
  
  wordAlignment(
    args: WithText & WithModel<TextTextWordAlignmentModel>
  ): Promise<string> {
    return this.httpClient.post({
      url: "/text/text/word-alignment/",
      query: {
        text: args.text,
        model: args.model ?? TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
      },
    });
  }
}

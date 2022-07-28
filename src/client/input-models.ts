/* Generated file with "scripts/generate-sdk.ts" */

import {
  AudioTextSpeech_to_textModel,
  ImageImageBackgroundRemovalModel,
  ImageImageColorizationModel,
  ImageImageFaceBluringModel,
  ImageImageUncolorizationModel,
  ImageTextAsciifyModel,
  ImageTextClassificationModel,
  ImageTextOcrModel,
  TextTextAutocorrectModel,
  TextTextEmotionRecognitionModel,
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
} from '../models';
import { WithModel } from './types';

export interface AudioTextSpeech_to_textInputs 
  extends WithModel<AudioTextSpeech_to_textModel> {
  language?: string;
  audio?: Blob;
  audio_url?: string;
}
export interface ImageImageBackgroundRemovalInputs 
  extends WithModel<ImageImageBackgroundRemovalModel> {
  image?: Blob;
  image_url?: string;
}
export interface ImageImageColorizationInputs 
  extends WithModel<ImageImageColorizationModel> {
  image?: Blob;
  image_url?: string;
}
export interface ImageImageFaceBluringInputs 
  extends WithModel<ImageImageFaceBluringModel> {
  image?: Blob;
  image_url?: string;
}
export interface ImageImageUncolorizationInputs 
  extends WithModel<ImageImageUncolorizationModel> {
  image?: Blob;
  image_url?: string;
}
export interface ImageTextAsciifyInputs 
  extends WithModel<ImageTextAsciifyModel> {
  image?: Blob;
  image_url?: string;
}
export interface ImageTextClassificationInputs 
  extends WithModel<ImageTextClassificationModel> {
  top_k?: number;
  image?: Blob;
  image_url?: string;
}
export interface ImageTextOcrInputs 
  extends WithModel<ImageTextOcrModel> {
  source_language?: string;
  image?: Blob;
  image_url?: string;
}
export interface TextTextAutocorrectInputs 
  extends WithModel<TextTextAutocorrectModel> {
  sentence?: string;
}
export interface TextTextEmotionRecognitionInputs 
  extends WithModel<TextTextEmotionRecognitionModel> {
  text?: string;
}
export interface TextTextHateSpeechDetectionInputs 
  extends WithModel<TextTextHateSpeechDetectionModel> {
  text?: string;
}
export interface TextTextKeywordExtractionInputs 
  extends WithModel<TextTextKeywordExtractionModel> {
  text?: string;
}
export interface TextTextLanguageDetectionInputs 
  extends WithModel<TextTextLanguageDetectionModel> {
  text?: string;
}
export interface TextTextLanguageGenerationInputs 
  extends WithModel<TextTextLanguageGenerationModel> {
  text?: string;
}
export interface TextTextNamedEntityRecognitionInputs 
  extends WithModel<TextTextNamedEntityRecognitionModel> {
  text?: string;
}
export interface TextTextNextSentencePredictionInputs 
  extends WithModel<TextTextNextSentencePredictionModel> {
  sentence_1?: string;
  sentence_2?: string;
}
export interface TextTextNextWordPredictionInputs 
  extends WithModel<TextTextNextWordPredictionModel> {
  sentence?: string;
}
export interface TextTextPluralInputs 
  extends WithModel<TextTextPluralModel> {
  word?: string;
  count?: number;
}
export interface TextTextProgrammingLanguageGenerationInputs 
  extends WithModel<TextTextProgrammingLanguageGenerationModel> {
  code_snippet?: string;
}
export interface TextTextQuestionAnsweringInputs 
  extends WithModel<TextTextQuestionAnsweringModel> {
  context?: string;
  question?: string;
}
export interface TextTextSentenceParaphraserInputs 
  extends WithModel<TextTextSentenceParaphraserModel> {
  context?: string;
}
export interface TextTextSentimentAnalysisInputs 
  extends WithModel<TextTextSentimentAnalysisModel> {
  text?: string;
}
export interface TextTextSimilarityInputs 
  extends WithModel<TextTextSimilarityModel> {
  sentence_1?: string;
  sentence_2?: string;
}
export interface TextTextWordAlignmentInputs 
  extends WithModel<TextTextWordAlignmentModel> {
  input_string_language_1?: string;
  input_string_language_2?: string;
}
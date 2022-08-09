import { AudioTextSpeech_to_textModel, ImageImageBackgroundRemovalModel, ImageImageColorizationModel, ImageImageFaceBluringModel, ImageImageUncolorizationModel, ImageTextAsciifyModel, ImageTextClassificationModel, ImageTextOcrModel, TextTextAutocorrectModel, TextTextEmotionRecognitionModel, TextTextHateSpeechDetectionModel, TextTextKeywordExtractionModel, TextTextLanguageDetectionModel, TextTextLanguageGenerationModel, TextTextNamedEntityRecognitionModel, TextTextNextSentencePredictionModel, TextTextNextWordPredictionModel, TextTextPluralModel, TextTextProgrammingLanguageGenerationModel, TextTextQuestionAnsweringModel, TextTextSentenceParaphraserModel, TextTextSentimentAnalysisModel, TextTextSimilarityModel, TextTextWordAlignmentModel } from '../models';
import { WithModel } from './types';
export interface AudioTextSpeech_to_textInputs extends WithModel<AudioTextSpeech_to_textModel> {
    audio?: Blob;
    audio_url?: string;
    language?: string;
}
export interface ImageImageBackgroundRemovalInputs extends WithModel<ImageImageBackgroundRemovalModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageColorizationInputs extends WithModel<ImageImageColorizationModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageFaceBluringInputs extends WithModel<ImageImageFaceBluringModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageUncolorizationInputs extends WithModel<ImageImageUncolorizationModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageTextAsciifyInputs extends WithModel<ImageTextAsciifyModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageTextClassificationInputs extends WithModel<ImageTextClassificationModel> {
    image?: Blob;
    image_url?: string;
    top_k?: string;
}
export interface ImageTextOcrInputs extends WithModel<ImageTextOcrModel> {
    image?: Blob;
    image_url?: string;
    source_language?: string;
}
export interface TextTextAutocorrectInputs extends WithModel<TextTextAutocorrectModel> {
}
export interface TextTextEmotionRecognitionInputs extends WithModel<TextTextEmotionRecognitionModel> {
}
export interface TextTextHateSpeechDetectionInputs extends WithModel<TextTextHateSpeechDetectionModel> {
}
export interface TextTextKeywordExtractionInputs extends WithModel<TextTextKeywordExtractionModel> {
}
export interface TextTextLanguageDetectionInputs extends WithModel<TextTextLanguageDetectionModel> {
}
export interface TextTextLanguageGenerationInputs extends WithModel<TextTextLanguageGenerationModel> {
}
export interface TextTextNamedEntityRecognitionInputs extends WithModel<TextTextNamedEntityRecognitionModel> {
}
export interface TextTextNextSentencePredictionInputs extends WithModel<TextTextNextSentencePredictionModel> {
    sentence_1?: string;
    sentence_2?: string;
}
export interface TextTextNextWordPredictionInputs extends WithModel<TextTextNextWordPredictionModel> {
}
export interface TextTextPluralInputs extends WithModel<TextTextPluralModel> {
    word?: string;
    count?: string;
}
export interface TextTextProgrammingLanguageGenerationInputs extends WithModel<TextTextProgrammingLanguageGenerationModel> {
}
export interface TextTextQuestionAnsweringInputs extends WithModel<TextTextQuestionAnsweringModel> {
    context?: string;
    question?: string;
}
export interface TextTextSentenceParaphraserInputs extends WithModel<TextTextSentenceParaphraserModel> {
}
export interface TextTextSentimentAnalysisInputs extends WithModel<TextTextSentimentAnalysisModel> {
}
export interface TextTextSimilarityInputs extends WithModel<TextTextSimilarityModel> {
    sentence_1?: string;
    sentence_2?: string;
}
export interface TextTextWordAlignmentInputs extends WithModel<TextTextWordAlignmentModel> {
    input_string_language_1?: string;
    input_string_language_2?: string;
}

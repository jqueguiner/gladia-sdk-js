import { AudioTextAudioTranscriptionModel, ImageImageBackgroundRemovalModel, ImageImageColorizationModel, ImageImageFaceBluringModel, ImageImageUncolorizationModel, ImageTextAsciifyModel, ImageTextClassificationModel, ImageTextOcrModel, TextImageImageGenerationModel, TextTextAdGenerationModel, TextTextArticleGenerationModel, TextTextAutocorrectModel, TextTextEmotionRecognitionModel, TextTextHateSpeechDetectionModel, TextTextIntentClassificationModel, TextTextKeywordExtractionModel, TextTextLanguageDetectionModel, TextTextLanguageGenerationModel, TextTextNamedEntityRecognitionModel, TextTextNextSentencePredictionModel, TextTextNextWordPredictionModel, TextTextPluralModel, TextTextProgrammingLanguageGenerationModel, TextTextQuestionAnsweringModel, TextTextSentenceParaphraserModel, TextTextSentimentAnalysisModel, TextTextSimilarityModel, TextTextSummarizationModel, TextTextTranslationModel, TextTextWordAlignmentModel } from '../models';
import { WithHeaders, WithModel } from './types';
export interface AudioTextAudioTranscriptionInputs extends WithHeaders, WithModel<AudioTextAudioTranscriptionModel> {
    audio?: Blob;
    audio_url?: string;
    language?: string;
}
export interface ImageImageBackgroundRemovalInputs extends WithHeaders, WithModel<ImageImageBackgroundRemovalModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageColorizationInputs extends WithHeaders, WithModel<ImageImageColorizationModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageFaceBluringInputs extends WithHeaders, WithModel<ImageImageFaceBluringModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageUncolorizationInputs extends WithHeaders, WithModel<ImageImageUncolorizationModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageTextAsciifyInputs extends WithHeaders, WithModel<ImageTextAsciifyModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageTextClassificationInputs extends WithHeaders, WithModel<ImageTextClassificationModel> {
    image?: Blob;
    image_url?: string;
    top_k?: number;
}
export interface ImageTextOcrInputs extends WithHeaders, WithModel<ImageTextOcrModel> {
    image?: Blob;
    image_url?: string;
    source_language?: string;
}
export interface TextImageImageGenerationInputs extends WithHeaders, WithModel<TextImageImageGenerationModel> {
    prompt: string;
    samples?: number;
    steps?: number;
    seed?: number;
}
export interface TextTextAdGenerationInputs extends WithHeaders, WithModel<TextTextAdGenerationModel> {
    keywords?: string[];
}
export interface TextTextArticleGenerationInputs extends WithHeaders, WithModel<TextTextArticleGenerationModel> {
    title?: string;
}
export interface TextTextAutocorrectInputs extends WithHeaders, WithModel<TextTextAutocorrectModel> {
    sentence: string;
}
export interface TextTextEmotionRecognitionInputs extends WithHeaders, WithModel<TextTextEmotionRecognitionModel> {
    text: string;
}
export interface TextTextHateSpeechDetectionInputs extends WithHeaders, WithModel<TextTextHateSpeechDetectionModel> {
    text: string;
}
export interface TextTextIntentClassificationInputs extends WithHeaders, WithModel<TextTextIntentClassificationModel> {
    text?: string;
}
export interface TextTextKeywordExtractionInputs extends WithHeaders, WithModel<TextTextKeywordExtractionModel> {
    text: string;
}
export interface TextTextLanguageDetectionInputs extends WithHeaders, WithModel<TextTextLanguageDetectionModel> {
    text: string;
}
export interface TextTextLanguageGenerationInputs extends WithHeaders, WithModel<TextTextLanguageGenerationModel> {
    text: string;
}
export interface TextTextNamedEntityRecognitionInputs extends WithHeaders, WithModel<TextTextNamedEntityRecognitionModel> {
    text: string;
}
export interface TextTextNextSentencePredictionInputs extends WithHeaders, WithModel<TextTextNextSentencePredictionModel> {
    sentence_1: string;
    sentence_2: string;
}
export interface TextTextNextWordPredictionInputs extends WithHeaders, WithModel<TextTextNextWordPredictionModel> {
    sentence: string;
}
export interface TextTextPluralInputs extends WithHeaders, WithModel<TextTextPluralModel> {
    word: string;
    count?: number;
}
export interface TextTextProgrammingLanguageGenerationInputs extends WithHeaders, WithModel<TextTextProgrammingLanguageGenerationModel> {
    code_snippet: string;
}
export interface TextTextQuestionAnsweringInputs extends WithHeaders, WithModel<TextTextQuestionAnsweringModel> {
    context: string;
    question: string;
}
export interface TextTextSentenceParaphraserInputs extends WithHeaders, WithModel<TextTextSentenceParaphraserModel> {
    context: string;
}
export interface TextTextSentimentAnalysisInputs extends WithHeaders, WithModel<TextTextSentimentAnalysisModel> {
    text: string;
}
export interface TextTextSimilarityInputs extends WithHeaders, WithModel<TextTextSimilarityModel> {
    sentence_1: string;
    sentence_2: string;
}
export interface TextTextSummarizationInputs extends WithHeaders, WithModel<TextTextSummarizationModel> {
    text?: string;
}
export interface TextTextTranslationInputs extends WithHeaders, WithModel<TextTextTranslationModel> {
    text?: string;
    source?: string;
    target?: string;
}
export interface TextTextWordAlignmentInputs extends WithHeaders, WithModel<TextTextWordAlignmentModel> {
    input_string_language_1: string;
    input_string_language_2: string;
}

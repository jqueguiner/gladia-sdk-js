import { AudioTextAudioTranscriptionModel, ImageImageBackgroundRemovalModel, ImageImageBackgroundReplacementModel, ImageImageColorizationModel, ImageImageDeblurringModel, ImageImageEnhancementModel, ImageImageFaceBluringModel, ImageImageGuidedInpaintingModel, ImageImageInpaintingModel, ImageImageSuperResolutionModel, ImageImageUncolorizationModel, ImageTextClassificationModel, ImageTextOcrModel, TextImageImageGenerationModel, TextTextAdGenerationModel, TextTextAddressFormattingModel, TextTextAgeFromNameModel, TextTextAnonymizationModel, TextTextArticleGenerationModel, TextTextAutocorrectModel, TextTextBulletPointGenerationModel, TextTextCleanCityModel, TextTextCleanCountryModel, TextTextCommandGenerationModel, TextTextConversationSummarizationModel, TextTextCountryFromNameModel, TextTextEmotionRecognitionModel, TextTextGenderFromNameModel, TextTextGpsAddressFormattingModel, TextTextHateSpeechDetectionModel, TextTextHeadlineGenerationModel, TextTextIntentClassificationModel, TextTextKeywordExtractionModel, TextTextLanguageDetectionModel, TextTextLanguageGenerationModel, TextTextNamedEntityRecognitionModel, TextTextNextSentencePredictionModel, TextTextNextWordPredictionModel, TextTextProgrammingLanguageGenerationModel, TextTextPunctuationRestorationModel, TextTextQuestionAnsweringModel, TextTextSentenceParaphraserModel, TextTextSentimentAnalysisModel, TextTextSimilarityModel, TextTextSummarizationModel, TextTextTranslationModel, TextTextWordAlignmentModel } from '../models';
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
export declare const IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES: readonly ["center", "top", "bottom", "left", "right", "top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right", "cropped"];
export declare type ImageImageBackgroundReplacementEnumParamAlignment = typeof IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES[number];
export interface ImageImageBackgroundReplacementInputs extends WithHeaders, WithModel<ImageImageBackgroundReplacementModel> {
    original_image?: Blob;
    original_image_url?: string;
    background_image?: Blob;
    background_image_url?: string;
    alignment: ImageImageBackgroundReplacementEnumParamAlignment;
}
export interface ImageImageColorizationInputs extends WithHeaders, WithModel<ImageImageColorizationModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageDeblurringInputs extends WithHeaders, WithModel<ImageImageDeblurringModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageEnhancementInputs extends WithHeaders, WithModel<ImageImageEnhancementModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageFaceBluringInputs extends WithHeaders, WithModel<ImageImageFaceBluringModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageGuidedInpaintingInputs extends WithHeaders, WithModel<ImageImageGuidedInpaintingModel> {
    original_image?: Blob;
    original_image_url?: string;
    mask_image?: Blob;
    mask_image_url?: string;
    prompt: string;
}
export interface ImageImageInpaintingInputs extends WithHeaders, WithModel<ImageImageInpaintingModel> {
    original_image?: Blob;
    original_image_url?: string;
    mask_image?: Blob;
    mask_image_url?: string;
}
export interface ImageImageSuperResolutionInputs extends WithHeaders, WithModel<ImageImageSuperResolutionModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageUncolorizationInputs extends WithHeaders, WithModel<ImageImageUncolorizationModel> {
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
export interface TextTextAddressFormattingInputs extends WithHeaders, WithModel<TextTextAddressFormattingModel> {
    address: string;
}
export interface TextTextAgeFromNameInputs extends WithHeaders, WithModel<TextTextAgeFromNameModel> {
    name?: string;
}
export interface TextTextAnonymizationInputs extends WithHeaders, WithModel<TextTextAnonymizationModel> {
    text: string;
    language: string;
    entities: string;
}
export interface TextTextArticleGenerationInputs extends WithHeaders, WithModel<TextTextArticleGenerationModel> {
    title?: string;
}
export interface TextTextAutocorrectInputs extends WithHeaders, WithModel<TextTextAutocorrectModel> {
    sentence: string;
}
export interface TextTextBulletPointGenerationInputs extends WithHeaders, WithModel<TextTextBulletPointGenerationModel> {
    text?: string;
    bullets?: number;
}
export interface TextTextCleanCityInputs extends WithHeaders, WithModel<TextTextCleanCityModel> {
    text?: string;
}
export interface TextTextCleanCountryInputs extends WithHeaders, WithModel<TextTextCleanCountryModel> {
    text?: string;
}
export interface TextTextCommandGenerationInputs extends WithHeaders, WithModel<TextTextCommandGenerationModel> {
    text?: string;
}
export interface TextTextConversationSummarizationInputs extends WithHeaders, WithModel<TextTextConversationSummarizationModel> {
    text: string;
}
export interface TextTextCountryFromNameInputs extends WithHeaders, WithModel<TextTextCountryFromNameModel> {
    name?: string;
}
export interface TextTextEmotionRecognitionInputs extends WithHeaders, WithModel<TextTextEmotionRecognitionModel> {
    text: string;
}
export interface TextTextGenderFromNameInputs extends WithHeaders, WithModel<TextTextGenderFromNameModel> {
    name?: string;
}
export interface TextTextGpsAddressFormattingInputs extends WithHeaders, WithModel<TextTextGpsAddressFormattingModel> {
    latitude: number;
    longitude: number;
}
export interface TextTextHateSpeechDetectionInputs extends WithHeaders, WithModel<TextTextHateSpeechDetectionModel> {
    text: string;
}
export interface TextTextHeadlineGenerationInputs extends WithHeaders, WithModel<TextTextHeadlineGenerationModel> {
    text: string;
    max_length: number;
}
export interface TextTextIntentClassificationInputs extends WithHeaders, WithModel<TextTextIntentClassificationModel> {
    text?: string;
}
export interface TextTextKeywordExtractionInputs extends WithHeaders, WithModel<TextTextKeywordExtractionModel> {
    text: string;
    top_k?: number;
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
    top_k?: number;
}
export interface TextTextProgrammingLanguageGenerationInputs extends WithHeaders, WithModel<TextTextProgrammingLanguageGenerationModel> {
    code_snippet: string;
}
export interface TextTextPunctuationRestorationInputs extends WithHeaders, WithModel<TextTextPunctuationRestorationModel> {
    sentence: string;
}
export interface TextTextQuestionAnsweringInputs extends WithHeaders, WithModel<TextTextQuestionAnsweringModel> {
    context: string;
    question: string;
    top_k?: number;
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
    text: string;
    source_language: string;
    min_length?: number;
    max_length?: number;
}
export interface TextTextTranslationInputs extends WithHeaders, WithModel<TextTextTranslationModel> {
    input_string: string;
    source_language: string;
    target_language: string;
}
export interface TextTextWordAlignmentInputs extends WithHeaders, WithModel<TextTextWordAlignmentModel> {
    input_string_language_1: string;
    input_string_language_2: string;
}

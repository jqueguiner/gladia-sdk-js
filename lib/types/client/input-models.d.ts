import { AudioTextAudioTranscriptionModel, AudioTextSpeakerDiarizationModel, ImageImageBackgroundRemovalModel, ImageImageBackgroundReplacementModel, ImageImageColorizationModel, ImageImageDeblurringModel, ImageImageUncolorizationModel, ImageTextClassificationModel, ImageTextOcrModel, TextImageImageGenerationModel, TextTextAgeFromNameModel, TextTextAnonymizationModel, TextTextBulletPointGenerationModel, TextTextCommandGenerationModel, TextTextCompanyCategorizationModel, TextTextCompanyNameNormalizationModel, TextTextCompanyStockCodeModel, TextTextCountryFromNameModel, TextTextDateCleaningModel, TextTextEmotionRecognitionModel, TextTextGenderFromNameModel, TextTextGpsAddressFormattingModel, TextTextGpt3Model, TextTextGuessCityModel, TextTextGuessCountryModel, TextTextGuessIntentModel, TextTextHateSpeechDetectionModel, TextTextHeadlineGenerationModel, TextTextKeywordExtractionModel, TextTextLanguageCodesModel, TextTextLanguageDetectionModel, TextTextLanguageGenerationModel, TextTextNamedEntityRecognitionModel, TextTextNextWordPredictionModel, TextTextProductOwnershipModel, TextTextProductSentimentModel, TextTextPunctuationRestorationModel, TextTextQuestionAnsweringModel, TextTextSentimentAnalysisModel, TextTextSimilarityModel, TextTextSpeakerRecognitionModel, TextTextTranslationModel, TextTextVatCountryGuessingModel, TextTextWebsiteClassificationModel } from '../models';
import { WithAsUrl, WithHeaders, WithModel } from './types';
export interface AudioTextAudioTranscriptionInputs extends WithHeaders, WithModel<AudioTextAudioTranscriptionModel> {
    audio?: Blob;
    audio_url?: string;
    language: string;
}
export interface AudioTextSpeakerDiarizationInputs extends WithHeaders, WithModel<AudioTextSpeakerDiarizationModel> {
    audio?: Blob;
    audio_url?: string;
    nb_speakers?: number;
}
export interface ImageImageBackgroundRemovalInputs extends WithHeaders, WithAsUrl, WithModel<ImageImageBackgroundRemovalModel> {
    image?: Blob;
    image_url?: string;
}
export declare const IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES: readonly ["center", "top", "bottom", "left", "right", "top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right", "cropped"];
export declare type ImageImageBackgroundReplacementEnumParamAlignment = typeof IMAGE_IMAGE_BACKGROUND_REPLACEMENT_ENUM_PARAM_ALIGNMENT_VALUES[number];
export interface ImageImageBackgroundReplacementInputs extends WithHeaders, WithAsUrl, WithModel<ImageImageBackgroundReplacementModel> {
    original_image?: Blob;
    original_image_url?: string;
    background_image?: Blob;
    background_image_url?: string;
    alignment: ImageImageBackgroundReplacementEnumParamAlignment;
}
export interface ImageImageColorizationInputs extends WithHeaders, WithAsUrl, WithModel<ImageImageColorizationModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageDeblurringInputs extends WithHeaders, WithAsUrl, WithModel<ImageImageDeblurringModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageImageUncolorizationInputs extends WithHeaders, WithAsUrl, WithModel<ImageImageUncolorizationModel> {
    image?: Blob;
    image_url?: string;
}
export interface ImageTextClassificationInputs extends WithHeaders, WithModel<ImageTextClassificationModel> {
    image?: Blob;
    image_url?: string;
    top_k: number;
}
export interface ImageTextOcrInputs extends WithHeaders, WithModel<ImageTextOcrModel> {
    image?: Blob;
    image_url?: string;
    source_language: string;
}
export interface TextImageImageGenerationInputs extends WithHeaders, WithAsUrl, WithModel<TextImageImageGenerationModel> {
    prompt: string;
    samples?: number;
    steps?: number;
    seed?: number;
}
export interface TextTextAgeFromNameInputs extends WithHeaders, WithModel<TextTextAgeFromNameModel> {
    name: string;
}
export interface TextTextAnonymizationInputs extends WithHeaders, WithModel<TextTextAnonymizationModel> {
    language: string;
    entities: string;
    text: string;
}
export interface TextTextBulletPointGenerationInputs extends WithHeaders, WithModel<TextTextBulletPointGenerationModel> {
    text: string;
    bullets?: number;
}
export interface TextTextCommandGenerationInputs extends WithHeaders, WithModel<TextTextCommandGenerationModel> {
    text: string;
}
export interface TextTextCompanyCategorizationInputs extends WithHeaders, WithModel<TextTextCompanyCategorizationModel> {
    text: string;
}
export interface TextTextCompanyNameNormalizationInputs extends WithHeaders, WithModel<TextTextCompanyNameNormalizationModel> {
    text: string;
}
export interface TextTextCompanyStockCodeInputs extends WithHeaders, WithModel<TextTextCompanyStockCodeModel> {
    text: string;
}
export interface TextTextCountryFromNameInputs extends WithHeaders, WithModel<TextTextCountryFromNameModel> {
    name: string;
}
export interface TextTextDateCleaningInputs extends WithHeaders, WithModel<TextTextDateCleaningModel> {
    date: string;
}
export interface TextTextEmotionRecognitionInputs extends WithHeaders, WithModel<TextTextEmotionRecognitionModel> {
    texts: string[];
}
export interface TextTextGenderFromNameInputs extends WithHeaders, WithModel<TextTextGenderFromNameModel> {
    name: string;
}
export interface TextTextGpsAddressFormattingInputs extends WithHeaders, WithModel<TextTextGpsAddressFormattingModel> {
    latitude: number;
    longitude: number;
}
export interface TextTextGpt3Inputs extends WithHeaders, WithModel<TextTextGpt3Model> {
    text: string;
}
export interface TextTextGuessCityInputs extends WithHeaders, WithModel<TextTextGuessCityModel> {
    text: string;
}
export interface TextTextGuessCountryInputs extends WithHeaders, WithModel<TextTextGuessCountryModel> {
    text: string;
}
export interface TextTextGuessIntentInputs extends WithHeaders, WithModel<TextTextGuessIntentModel> {
    text: string;
}
export interface TextTextHateSpeechDetectionInputs extends WithHeaders, WithModel<TextTextHateSpeechDetectionModel> {
    text: string;
}
export interface TextTextHeadlineGenerationInputs extends WithHeaders, WithModel<TextTextHeadlineGenerationModel> {
    text: string;
    max_length: number;
}
export interface TextTextKeywordExtractionInputs extends WithHeaders, WithModel<TextTextKeywordExtractionModel> {
    text: string;
    top_k?: number;
}
export interface TextTextLanguageCodesInputs extends WithHeaders, WithModel<TextTextLanguageCodesModel> {
    language_code: string;
    display_output_language: string;
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
export interface TextTextNextWordPredictionInputs extends WithHeaders, WithModel<TextTextNextWordPredictionModel> {
    sentence: string;
    top_k: number;
}
export interface TextTextProductOwnershipInputs extends WithHeaders, WithModel<TextTextProductOwnershipModel> {
    text: string;
}
export interface TextTextProductSentimentInputs extends WithHeaders, WithModel<TextTextProductSentimentModel> {
    text: string;
}
export interface TextTextPunctuationRestorationInputs extends WithHeaders, WithModel<TextTextPunctuationRestorationModel> {
    sentence: string;
}
export interface TextTextQuestionAnsweringInputs extends WithHeaders, WithModel<TextTextQuestionAnsweringModel> {
    context: string;
    question: string;
    top_k?: number;
}
export interface TextTextSentimentAnalysisInputs extends WithHeaders, WithModel<TextTextSentimentAnalysisModel> {
    texts: string[];
}
export interface TextTextSimilarityInputs extends WithHeaders, WithModel<TextTextSimilarityModel> {
    sentence_1: string;
    sentence_2: string;
}
export interface TextTextSpeakerRecognitionInputs extends WithHeaders, WithModel<TextTextSpeakerRecognitionModel> {
    text: string;
}
export interface TextTextTranslationInputs extends WithHeaders, WithModel<TextTextTranslationModel> {
    text: string;
    target: string;
}
export interface TextTextVatCountryGuessingInputs extends WithHeaders, WithModel<TextTextVatCountryGuessingModel> {
    text: string;
}
export interface TextTextWebsiteClassificationInputs extends WithHeaders, WithModel<TextTextWebsiteClassificationModel> {
    text: string;
}

import { AudioTextAudioTranscriptionModel, ImageImageBackgroundRemovalModel, ImageImageColorizationModel, ImageImageDeblurringModel, ImageImageFaceBluringModel, ImageImageGuidedInpaintingModel, ImageImageInpaintingModel, ImageImageSuperResolutionModel, ImageImageUncolorizationModel, ImageTextAsciifyModel, ImageTextClassificationModel, ImageTextOcrModel, TextImageImageGenerationModel, TextTextAdGenerationModel, TextTextArticleGenerationModel, TextTextAutocorrectModel, TextTextBulletPointGenerationModel, TextTextEmotionRecognitionModel, TextTextHateSpeechDetectionModel, TextTextHeadlineGenerationModel, TextTextIntentClassificationModel, TextTextKeywordExtractionModel, TextTextLanguageDetectionModel, TextTextLanguageGenerationModel, TextTextNamedEntityRecognitionModel, TextTextNextSentencePredictionModel, TextTextNextWordPredictionModel, TextTextProgrammingLanguageGenerationModel, TextTextQuestionAnsweringModel, TextTextSentenceParaphraserModel, TextTextSentimentAnalysisModel, TextTextSimilarityModel, TextTextSummarizationModel, TextTextTranslationModel, TextTextWordAlignmentModel } from '../models';
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
export interface ImageImageDeblurringInputs extends WithHeaders, WithModel<ImageImageDeblurringModel> {
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
export interface TextTextBulletPointGenerationInputs extends WithHeaders, WithModel<TextTextBulletPointGenerationModel> {
    text?: string;
}
export interface TextTextEmotionRecognitionInputs extends WithHeaders, WithModel<TextTextEmotionRecognitionModel> {
    text: string;
}
export interface TextTextHateSpeechDetectionInputs extends WithHeaders, WithModel<TextTextHateSpeechDetectionModel> {
    text: string;
}
export interface TextTextHeadlineGenerationInputs extends WithHeaders, WithModel<TextTextHeadlineGenerationModel> {
    text?: string;
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

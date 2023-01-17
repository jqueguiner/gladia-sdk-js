/* Generated file with "scripts/generate-sdk.ts" */

type Base64Image = string;
type ImageUrl = string;

export type AudioTextAudioTranscriptionOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type AudioTextSpeakerDiarizationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type AudioTextSpeakerGenderClassificationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type ImageImageBackgroundRemovalOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageBackgroundRemovalOutputs = 
  | ArrayBuffer
  | ImageImageBackgroundRemovalOutputsOneSampleAsUrl;
export type ImageImageBackgroundReplacementOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageBackgroundReplacementOutputs = 
  | ArrayBuffer
  | ImageImageBackgroundReplacementOutputsOneSampleAsUrl;
export type ImageImageColorizationOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageColorizationOutputs = 
  | ArrayBuffer
  | ImageImageColorizationOutputsOneSampleAsUrl;
export type ImageImageDeblurringOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageDeblurringOutputs = 
  | ArrayBuffer
  | ImageImageDeblurringOutputsOneSampleAsUrl;
export type ImageImageEnhancementOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageEnhancementOutputs = 
  | ArrayBuffer
  | ImageImageEnhancementOutputsOneSampleAsUrl;
export type ImageImageFaceBluringOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageFaceBluringOutputs = 
  | ArrayBuffer
  | ImageImageFaceBluringOutputsOneSampleAsUrl;
export type ImageImageGuidedInpaintingOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageGuidedInpaintingOutputs = 
  | ArrayBuffer
  | ImageImageGuidedInpaintingOutputsOneSampleAsUrl;
export type ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageImageGuidedInpaintingOutputs = 
  | ArrayBuffer
  | ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl;
export type ImageImageInpaintingOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageInpaintingOutputs = 
  | ArrayBuffer
  | ImageImageInpaintingOutputsOneSampleAsUrl;
export type ImageImageUncolorizationOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type ImageImageUncolorizationOutputs = 
  | ArrayBuffer
  | ImageImageUncolorizationOutputsOneSampleAsUrl;
export type ImageTextClassificationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type ImageTextOcrOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextImageImageGenerationOutputsOneSampleAsUrl = { url: ImageUrl[] };
export type TextImageImageGenerationOutputsMultipleSamplesAsUrl = { url: ImageUrl[] };
export type TextImageImageGenerationOutputsOneSample = ArrayBuffer;
export type TextImageImageGenerationOutputsMultipleSamples = Base64Image[];
export type TextImageImageGenerationOutputs = 
  | TextImageImageGenerationOutputsOneSample
  | TextImageImageGenerationOutputsMultipleSamples
  | TextImageImageGenerationOutputsOneSampleAsUrl
  | TextImageImageGenerationOutputsMultipleSamplesAsUrl;
export type TextTextAddressFormattingOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextAgeFromNameOutputs = Record<string, string | number | boolean>;
export type TextTextAnonymizationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextAutocorrectOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextBulletPointGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextCommandGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextCompanyCategorizationOutputs = Record<string, string | number | boolean>;
export type TextTextCompanyNameNormalizationOutputs = Record<string, string | number | boolean>;
export type TextTextCompanyStockCodeOutputs = Record<string, string | number | boolean>;
export type TextTextConversationSummarizationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextCountryFromNameOutputs = Record<string, string | number | boolean>;
export type TextTextDateCleaningOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextEmotionRecognitionOutputs = {
  prediction: string[];
  prediction_raw: unknown;
};
export type TextTextGenderFromNameOutputs = Record<string, string | number | boolean>;
export type TextTextGpsAddressFormattingOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextGpt3Outputs = Record<string, string | number | boolean>;
export type TextTextGuessCityOutputs = Record<string, string | number | boolean>;
export type TextTextGuessCountryOutputs = Record<string, string | number | boolean>;
export type TextTextGuessIntentOutputs = Record<string, string | number | boolean>;
export type TextTextHateSpeechDetectionOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextHeadlineGenerationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextImageGenerationPromptBeautifierOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextKeywordExtractionOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextLanguageCodesOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextLanguageDetectionOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextLanguageGenerationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextNamedEntityRecognitionOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextNextSentencePredictionOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextNextWordPredictionOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextProductOwnershipOutputs = Record<string, string | number | boolean>;
export type TextTextProductSentimentOutputs = Record<string, string | number | boolean>;
export type TextTextProgrammingLanguageGenerationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextPunctuationRestorationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextQuestionAnsweringOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextSentenceParaphraserOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextSentimentAnalysisOutputs = {
  prediction: string[];
  prediction_raw: unknown;
};
export type TextTextSimilarityOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextSpeakerRecognitionOutputs = Record<string, string | number | boolean>;
export type TextTextSummarizationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextTranslationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextVatCountryGuessingOutputs = Record<string, string | number | boolean>;
export type TextTextWebsiteClassificationOutputs = Record<string, string | number | boolean>;
export type TextTextWordAlignmentOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type VideoTextActionClassificationsOutputs = {
  prediction: string;
  prediction_raw: unknown;
};

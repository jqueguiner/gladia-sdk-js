/* Generated file with "scripts/generate-sdk.ts" */

type Base64Image = string;
type ImageUrl = string;

export type AudioTextAudioTranscriptionOutputs = {
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
export type TextTextAgeFromNameOutputs = Record<string, string | number | boolean>;
export type TextTextAnonymizationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextBulletPointGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextCommandGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextCompanyCategorizationOutputs = Record<string, string | number | boolean>;
export type TextTextCompanyNameNormalizationOutputs = Record<string, string | number | boolean>;
export type TextTextCompanyStockCodeOutputs = Record<string, string | number | boolean>;
export type TextTextCountryFromNameOutputs = Record<string, string | number | boolean>;
export type TextTextDateCleaningOutputs = {
  prediction: string;
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
export type TextTextNextWordPredictionOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextProductOwnershipOutputs = Record<string, string | number | boolean>;
export type TextTextProductSentimentOutputs = Record<string, string | number | boolean>;
export type TextTextQuestionAnsweringOutputs = {
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
export type TextTextTranslationOutputs = {
  prediction: string;
  prediction_raw: unknown;
};
export type TextTextVatCountryGuessingOutputs = Record<string, string | number | boolean>;
export type TextTextWebsiteClassificationOutputs = Record<string, string | number | boolean>;

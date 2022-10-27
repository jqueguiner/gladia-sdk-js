/* Generated file with "scripts/generate-sdk.ts" */

type Base64Image = string;

export type AudioTextAudioTranscriptionOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type ImageImageBackgroundRemovalOutputs = ArrayBuffer;
export type ImageImageBackgroundReplacementOutputs = ArrayBuffer;
export type ImageImageColorizationOutputs = ArrayBuffer;
export type ImageImageDeblurringOutputs = ArrayBuffer;
export type ImageImageEnhancementOutputs = ArrayBuffer;
export type ImageImageFaceBluringOutputs = ArrayBuffer;
export type ImageImageGuidedInpaintingOutputs = ArrayBuffer;
export type ImageImageInpaintingOutputs = ArrayBuffer;
export type ImageImageSuperResolutionOutputs = ArrayBuffer;
export type ImageImageUncolorizationOutputs = ArrayBuffer;
export type ImageTextClassificationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type ImageTextOcrOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextImageImageGenerationOutputsOneSample = ArrayBuffer;
export type TextImageImageGenerationOutputsMultipleSamples = Base64Image[];
export type TextImageImageGenerationOutputs = TextImageImageGenerationOutputsOneSample | TextImageImageGenerationOutputsMultipleSamples;
export type TextTextAdGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextAddressFormattingOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextAgeFromNameOutputs = Record<string, string | number | boolean>;
export type TextTextAnonymizationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextArticleGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextAutocorrectOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextBulletPointGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextCleanCityOutputs = Record<string, string | number | boolean>;
export type TextTextCleanCountryOutputs = Record<string, string | number | boolean>;
export type TextTextCommandGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextConversationSummarizationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextCountryFromNameOutputs = Record<string, string | number | boolean>;
export type TextTextEmotionRecognitionOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextGenderFromNameOutputs = Record<string, string | number | boolean>;
export type TextTextGpsAddressFormattingOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextHateSpeechDetectionOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextHeadlineGenerationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextIntentClassificationOutputs = Record<string, string | number | boolean>;
export type TextTextKeywordExtractionOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextLanguageDetectionOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextLanguageGenerationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextNamedEntityRecognitionOutputs = {
  prediction: string[],
  prediction_raw: unknown,
};
export type TextTextNextSentencePredictionOutputs = {
  prediction: number,
  prediction_raw: unknown,
};
export type TextTextNextWordPredictionOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextProgrammingLanguageGenerationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextPunctuationRestorationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextQuestionAnsweringOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextSentenceParaphraserOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextSentimentAnalysisOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextSimilarityOutputs = {
  prediction: number,
  prediction_raw: unknown,
};
export type TextTextSummarizationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextTranslationOutputs = {
  prediction: string,
  prediction_raw: unknown,
};
export type TextTextWordAlignmentOutputs = {
  prediction: string[],
  prediction_raw: unknown,
};
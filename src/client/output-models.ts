/* Generated file with "scripts/generate-sdk.ts" */

type Base64Image = string;

export type AudioTextAudioTranscriptionOutputs = {
  prediction: string,
  prediction_raw: any,
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
export type ImageTextAsciifyOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type ImageTextClassificationOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type ImageTextOcrOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextImageImageGenerationOutputsOneSample = ArrayBuffer;
export type TextImageImageGenerationOutputsMultipleSamples = Base64Image[];
export type TextImageImageGenerationOutputs = TextImageImageGenerationOutputsOneSample | TextImageImageGenerationOutputsMultipleSamples;
export type TextTextAdGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextArticleGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextAutocorrectOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextBulletPointGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextEmotionRecognitionOutputs = Record<string, string | number | boolean>;
export type TextTextHateSpeechDetectionOutputs = Record<string, string | number | boolean>;
export type TextTextHeadlineGenerationOutputs = Record<string, string | number | boolean>;
export type TextTextIntentClassificationOutputs = Record<string, string | number | boolean>;
export type TextTextKeywordExtractionOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextLanguageDetectionOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextLanguageGenerationOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextNamedEntityRecognitionOutputs = {
  prediction: string[],
  prediction_raw: any,
};
export type TextTextNextSentencePredictionOutputs = {
  prediction: number,
  prediction_raw: any,
};
export type TextTextNextWordPredictionOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextProgrammingLanguageGenerationOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextQuestionAnsweringOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextSentenceParaphraserOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextSentimentAnalysisOutputs = {
  prediction: string,
  prediction_raw: any,
};
export type TextTextSimilarityOutputs = {
  prediction: number,
  prediction_raw: any,
};
export type TextTextSummarizationOutputs = Record<string, string | number | boolean>;
export type TextTextTranslationOutputs = Record<string, string | number | boolean>;
export type TextTextWordAlignmentOutputs = {
  prediction: string[],
  prediction_raw: any,
};
declare type Base64Image = string;
declare type ImageUrl = string;
export declare type AudioTextAudioTranscriptionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type AudioTextSpeakerDiarizationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type AudioTextSpeakerGenderClassificationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type ImageImageBackgroundRemovalOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageBackgroundRemovalOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageBackgroundRemovalOutputs = ArrayBuffer | ImageImageBackgroundRemovalOutputsOneSampleAsUrl | ImageImageBackgroundRemovalOutputsMultipleSamplesAsUrl;
export declare type ImageImageBackgroundReplacementOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageBackgroundReplacementOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageBackgroundReplacementOutputs = ArrayBuffer | ImageImageBackgroundReplacementOutputsOneSampleAsUrl | ImageImageBackgroundReplacementOutputsMultipleSamplesAsUrl;
export declare type ImageImageColorizationOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageColorizationOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageColorizationOutputs = ArrayBuffer | ImageImageColorizationOutputsOneSampleAsUrl | ImageImageColorizationOutputsMultipleSamplesAsUrl;
export declare type ImageImageDeblurringOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageDeblurringOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageDeblurringOutputs = ArrayBuffer | ImageImageDeblurringOutputsOneSampleAsUrl | ImageImageDeblurringOutputsMultipleSamplesAsUrl;
export declare type ImageImageEnhancementOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageEnhancementOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageEnhancementOutputs = ArrayBuffer | ImageImageEnhancementOutputsOneSampleAsUrl | ImageImageEnhancementOutputsMultipleSamplesAsUrl;
export declare type ImageImageFaceBluringOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageFaceBluringOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageFaceBluringOutputs = ArrayBuffer | ImageImageFaceBluringOutputsOneSampleAsUrl | ImageImageFaceBluringOutputsMultipleSamplesAsUrl;
export declare type ImageImageGuidedInpaintingOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageGuidedInpaintingOutputs = ArrayBuffer | ImageImageGuidedInpaintingOutputsOneSampleAsUrl | ImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl;
export declare type ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageImageGuidedInpaintingOutputs = ArrayBuffer | ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl | ImageImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl;
export declare type ImageImageInpaintingOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageInpaintingOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageInpaintingOutputs = ArrayBuffer | ImageImageInpaintingOutputsOneSampleAsUrl | ImageImageInpaintingOutputsMultipleSamplesAsUrl;
export declare type ImageImageUncolorizationOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageUncolorizationOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageUncolorizationOutputs = ArrayBuffer | ImageImageUncolorizationOutputsOneSampleAsUrl | ImageImageUncolorizationOutputsMultipleSamplesAsUrl;
export declare type ImageTextClassificationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type ImageTextOcrOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextImageImageGenerationOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type TextImageImageGenerationOutputsMultipleSamplesAsUrl = {
    url: ImageUrl[];
};
export declare type TextImageImageGenerationOutputsOneSample = ArrayBuffer;
export declare type TextImageImageGenerationOutputsMultipleSamples = Base64Image[];
export declare type TextImageImageGenerationOutputs = TextImageImageGenerationOutputsOneSample | TextImageImageGenerationOutputsMultipleSamples | TextImageImageGenerationOutputsOneSampleAsUrl | TextImageImageGenerationOutputsMultipleSamplesAsUrl;
export declare type TextTextAddressFormattingOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextAgeFromNameOutputs = Record<string, string | number | boolean>;
export declare type TextTextAnonymizationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextAutocorrectOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextBulletPointGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextCommandGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextCompanyCategorizationOutputs = Record<string, string | number | boolean>;
export declare type TextTextCompanyNameNormalizationOutputs = Record<string, string | number | boolean>;
export declare type TextTextCompanyStockCodeOutputs = Record<string, string | number | boolean>;
export declare type TextTextConversationSummarizationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextCountryFromNameOutputs = Record<string, string | number | boolean>;
export declare type TextTextDateCleaningOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextEmotionRecognitionOutputs = {
    prediction: string[];
    prediction_raw: unknown;
};
export declare type TextTextGenderFromNameOutputs = Record<string, string | number | boolean>;
export declare type TextTextGpsAddressFormattingOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextGpt3Outputs = Record<string, string | number | boolean>;
export declare type TextTextGuessCityOutputs = Record<string, string | number | boolean>;
export declare type TextTextGuessCountryOutputs = Record<string, string | number | boolean>;
export declare type TextTextGuessIntentOutputs = Record<string, string | number | boolean>;
export declare type TextTextHateSpeechDetectionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextHeadlineGenerationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextImageGenerationPromptBeautifierOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextKeywordExtractionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextLanguageCodesOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextLanguageDetectionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextLanguageGenerationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextNamedEntityRecognitionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextNextSentencePredictionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextNextWordPredictionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextProductOwnershipOutputs = Record<string, string | number | boolean>;
export declare type TextTextProductSentimentOutputs = Record<string, string | number | boolean>;
export declare type TextTextProgrammingLanguageGenerationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextPunctuationRestorationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextQuestionAnsweringOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextSentenceParaphraserOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextSentimentAnalysisOutputs = {
    prediction: string[];
    prediction_raw: unknown;
};
export declare type TextTextSimilarityOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextSpeakerRecognitionOutputs = Record<string, string | number | boolean>;
export declare type TextTextSummarizationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextTranslationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextVatCountryGuessingOutputs = Record<string, string | number | boolean>;
export declare type TextTextWebsiteClassificationOutputs = Record<string, string | number | boolean>;
export declare type TextTextWordAlignmentOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type VideoTextActionClassificationsOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export {};

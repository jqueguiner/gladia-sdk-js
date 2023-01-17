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
export declare type ImageImageBackgroundRemovalOutputs = ArrayBuffer | ImageImageBackgroundRemovalOutputsOneSampleAsUrl;
export declare type ImageImageBackgroundReplacementOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageBackgroundReplacementOutputs = ArrayBuffer | ImageImageBackgroundReplacementOutputsOneSampleAsUrl;
export declare type ImageImageColorizationOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageColorizationOutputs = ArrayBuffer | ImageImageColorizationOutputsOneSampleAsUrl;
export declare type ImageImageDeblurringOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageDeblurringOutputs = ArrayBuffer | ImageImageDeblurringOutputsOneSampleAsUrl;
export declare type ImageImageEnhancementOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageEnhancementOutputs = ArrayBuffer | ImageImageEnhancementOutputsOneSampleAsUrl;
export declare type ImageImageFaceBluringOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageFaceBluringOutputs = ArrayBuffer | ImageImageFaceBluringOutputsOneSampleAsUrl;
export declare type ImageImageGuidedInpaintingOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageGuidedInpaintingOutputs = ArrayBuffer | ImageImageGuidedInpaintingOutputsOneSampleAsUrl;
export declare type ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageImageGuidedInpaintingOutputs = ArrayBuffer | ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl;
export declare type ImageImageInpaintingOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageInpaintingOutputs = ArrayBuffer | ImageImageInpaintingOutputsOneSampleAsUrl;
export declare type ImageImageUncolorizationOutputsOneSampleAsUrl = {
    url: ImageUrl[];
};
export declare type ImageImageUncolorizationOutputs = ArrayBuffer | ImageImageUncolorizationOutputsOneSampleAsUrl;
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

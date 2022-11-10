declare type Base64Image = string;
export declare type AudioTextAudioTranscriptionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type ImageImageBackgroundRemovalOutputs = ArrayBuffer;
export declare type ImageImageBackgroundReplacementOutputs = ArrayBuffer;
export declare type ImageImageColorizationOutputs = ArrayBuffer;
export declare type ImageImageDeblurringOutputs = ArrayBuffer;
export declare type ImageImageEnhancementOutputs = ArrayBuffer;
export declare type ImageImageFaceBluringOutputs = ArrayBuffer;
export declare type ImageImageGuidedInpaintingOutputs = ArrayBuffer;
export declare type ImageImageInpaintingOutputs = ArrayBuffer;
export declare type ImageImageSuperResolutionOutputs = ArrayBuffer;
export declare type ImageImageUncolorizationOutputs = ArrayBuffer;
export declare type ImageTextClassificationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type ImageTextOcrOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextImageImageGenerationOutputsOneSample = ArrayBuffer;
export declare type TextImageImageGenerationOutputsMultipleSamples = Base64Image[];
export declare type TextImageImageGenerationOutputs = TextImageImageGenerationOutputsOneSample | TextImageImageGenerationOutputsMultipleSamples;
export declare type TextTextAdGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextAddressFormattingOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextAgeFromNameOutputs = Record<string, string | number | boolean>;
export declare type TextTextAnonymizationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextArticleGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextAutocorrectOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextBulletPointGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextCleanCityOutputs = Record<string, string | number | boolean>;
export declare type TextTextCleanCountryOutputs = Record<string, string | number | boolean>;
export declare type TextTextCommandGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextCompanyCategorizationOutputs = Record<string, string | number | boolean>;
export declare type TextTextCompanyNameNormalizationOutputs = Record<string, string | number | boolean>;
export declare type TextTextCompanyStockCodeOutputs = Record<string, string | number | boolean>;
export declare type TextTextConversationSummarizationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextCountryFromNameOutputs = Record<string, string | number | boolean>;
export declare type TextTextEmotionRecognitionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextGenderFromNameOutputs = Record<string, string | number | boolean>;
export declare type TextTextGpsAddressFormattingOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextGpt3Outputs = Record<string, string | number | boolean>;
export declare type TextTextHateSpeechDetectionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextHeadlineGenerationOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextIntentClassificationOutputs = Record<string, string | number | boolean>;
export declare type TextTextKeywordExtractionOutputs = {
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
    prediction: string[];
    prediction_raw: unknown;
};
export declare type TextTextNextSentencePredictionOutputs = {
    prediction: number;
    prediction_raw: unknown;
};
export declare type TextTextNextWordPredictionOutputs = {
    prediction: string;
    prediction_raw: unknown;
};
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
    prediction: string;
    prediction_raw: unknown;
};
export declare type TextTextSimilarityOutputs = {
    prediction: number;
    prediction_raw: unknown;
};
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
    prediction: string[];
    prediction_raw: unknown;
};
export {};

declare type Base64Image = string;
export declare type AudioTextAudioTranscriptionOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type ImageImageBackgroundRemovalOutputs = ArrayBuffer;
export declare type ImageImageColorizationOutputs = ArrayBuffer;
export declare type ImageImageDeblurringOutputs = ArrayBuffer;
export declare type ImageImageFaceBluringOutputs = ArrayBuffer;
export declare type ImageImageGuidedInpaintingOutputs = ArrayBuffer;
export declare type ImageImageInpaintingOutputs = ArrayBuffer;
export declare type ImageImageSuperResolutionOutputs = ArrayBuffer;
export declare type ImageImageUncolorizationOutputs = ArrayBuffer;
export declare type ImageTextAsciifyOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type ImageTextClassificationOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type ImageTextOcrOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextImageImageGenerationOutputsOneSample = Base64Image[];
export declare type TextImageImageGenerationOutputsMultipleSamples = ArrayBuffer;
export declare type TextImageImageGenerationOutputs = TextImageImageGenerationOutputsOneSample | TextImageImageGenerationOutputsMultipleSamples;
export declare type TextTextAdGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextArticleGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextAutocorrectOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextBulletPointGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextEmotionRecognitionOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextHateSpeechDetectionOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextHeadlineGenerationOutputs = Record<string, string | number | boolean>;
export declare type TextTextIntentClassificationOutputs = Record<string, string | number | boolean>;
export declare type TextTextKeywordExtractionOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextLanguageDetectionOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextLanguageGenerationOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextNamedEntityRecognitionOutputs = {
    prediction: string[];
    prediction_raw: any;
};
export declare type TextTextNextSentencePredictionOutputs = {
    prediction: number;
    prediction_raw: any;
};
export declare type TextTextNextWordPredictionOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextProgrammingLanguageGenerationOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextQuestionAnsweringOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextSentenceParaphraserOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextSentimentAnalysisOutputs = {
    prediction: string;
    prediction_raw: any;
};
export declare type TextTextSimilarityOutputs = {
    prediction: number;
    prediction_raw: any;
};
export declare type TextTextSummarizationOutputs = Record<string, string | number | boolean>;
export declare type TextTextTranslationOutputs = Record<string, string | number | boolean>;
export declare type TextTextWordAlignmentOutputs = {
    prediction: string[];
    prediction_raw: any;
};
export {};

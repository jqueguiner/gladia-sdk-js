import { FromAudio } from './from-audio';
import { FromAudioToText } from './from-audio-to-text';
import { FromImage } from './from-image';
import { FromImageToImage } from './from-image-to-image';
import { FromImageToText } from './from-image-to-text';
import { FromText } from './from-text';
import { FromTextToImage } from './from-text-to-image';
import { FromTextToText } from './from-text-to-text';
import { FromVideo } from './from-video';
import { FromVideoToText } from './from-video-to-text';
import { AudioTextAudioTranscriptionInputs, AudioTextSpeakerDiarizationInputs, AudioTextSpeakerGenderClassificationInputs, ImageImageBackgroundRemovalInputs, ImageImageBackgroundReplacementInputs, ImageImageColorizationInputs, ImageImageDeblurringInputs, ImageImageEnhancementInputs, ImageImageFaceBluringInputs, ImageImageGuidedInpaintingInputs, ImageImageImageGuidedInpaintingInputs, ImageImageInpaintingInputs, ImageImageUncolorizationInputs, ImageTextClassificationInputs, ImageTextOcrInputs, TextImageImageGenerationInputs, TextTextAddressFormattingInputs, TextTextAgeFromNameInputs, TextTextAnonymizationInputs, TextTextAutocorrectInputs, TextTextBulletPointGenerationInputs, TextTextCommandGenerationInputs, TextTextCompanyCategorizationInputs, TextTextCompanyNameNormalizationInputs, TextTextCompanyStockCodeInputs, TextTextConversationSummarizationInputs, TextTextCountryFromNameInputs, TextTextDateCleaningInputs, TextTextEmotionRecognitionInputs, TextTextGenderFromNameInputs, TextTextGpsAddressFormattingInputs, TextTextGpt3Inputs, TextTextGuessCityInputs, TextTextGuessCountryInputs, TextTextGuessIntentInputs, TextTextHateSpeechDetectionInputs, TextTextHeadlineGenerationInputs, TextTextImageGenerationPromptBeautifierInputs, TextTextKeywordExtractionInputs, TextTextLanguageCodesInputs, TextTextLanguageDetectionInputs, TextTextLanguageGenerationInputs, TextTextNamedEntityRecognitionInputs, TextTextNextSentencePredictionInputs, TextTextNextWordPredictionInputs, TextTextProductOwnershipInputs, TextTextProductSentimentInputs, TextTextProgrammingLanguageGenerationInputs, TextTextPunctuationRestorationInputs, TextTextQuestionAnsweringInputs, TextTextSentenceParaphraserInputs, TextTextSentimentAnalysisInputs, TextTextSimilarityInputs, TextTextSpeakerRecognitionInputs, TextTextSummarizationInputs, TextTextTranslationInputs, TextTextVatCountryGuessingInputs, TextTextWebsiteClassificationInputs, TextTextWordAlignmentInputs, VideoTextActionClassificationsInputs } from './input-models';
import { AudioTextAudioTranscriptionOutputs, AudioTextSpeakerDiarizationOutputs, AudioTextSpeakerGenderClassificationOutputs, ImageImageBackgroundRemovalOutputs, ImageImageBackgroundRemovalOutputsOneSampleAsUrl, ImageImageBackgroundReplacementOutputs, ImageImageBackgroundReplacementOutputsOneSampleAsUrl, ImageImageColorizationOutputs, ImageImageColorizationOutputsOneSampleAsUrl, ImageImageDeblurringOutputs, ImageImageDeblurringOutputsOneSampleAsUrl, ImageImageEnhancementOutputs, ImageImageEnhancementOutputsOneSampleAsUrl, ImageImageFaceBluringOutputs, ImageImageFaceBluringOutputsOneSampleAsUrl, ImageImageGuidedInpaintingOutputs, ImageImageGuidedInpaintingOutputsOneSampleAsUrl, ImageImageImageGuidedInpaintingOutputs, ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl, ImageImageInpaintingOutputs, ImageImageInpaintingOutputsOneSampleAsUrl, ImageImageUncolorizationOutputs, ImageImageUncolorizationOutputsOneSampleAsUrl, ImageTextClassificationOutputs, ImageTextOcrOutputs, TextImageImageGenerationOutputsMultipleSamples, TextImageImageGenerationOutputsOneSample, TextImageImageGenerationOutputsMultipleSamplesAsUrl, TextImageImageGenerationOutputsOneSampleAsUrl, TextTextAddressFormattingOutputs, TextTextAgeFromNameOutputs, TextTextAnonymizationOutputs, TextTextAutocorrectOutputs, TextTextBulletPointGenerationOutputs, TextTextCommandGenerationOutputs, TextTextCompanyCategorizationOutputs, TextTextCompanyNameNormalizationOutputs, TextTextCompanyStockCodeOutputs, TextTextConversationSummarizationOutputs, TextTextCountryFromNameOutputs, TextTextDateCleaningOutputs, TextTextEmotionRecognitionOutputs, TextTextGenderFromNameOutputs, TextTextGpsAddressFormattingOutputs, TextTextGpt3Outputs, TextTextGuessCityOutputs, TextTextGuessCountryOutputs, TextTextGuessIntentOutputs, TextTextHateSpeechDetectionOutputs, TextTextHeadlineGenerationOutputs, TextTextImageGenerationPromptBeautifierOutputs, TextTextKeywordExtractionOutputs, TextTextLanguageCodesOutputs, TextTextLanguageDetectionOutputs, TextTextLanguageGenerationOutputs, TextTextNamedEntityRecognitionOutputs, TextTextNextSentencePredictionOutputs, TextTextNextWordPredictionOutputs, TextTextProductOwnershipOutputs, TextTextProductSentimentOutputs, TextTextProgrammingLanguageGenerationOutputs, TextTextPunctuationRestorationOutputs, TextTextQuestionAnsweringOutputs, TextTextSentenceParaphraserOutputs, TextTextSentimentAnalysisOutputs, TextTextSimilarityOutputs, TextTextSpeakerRecognitionOutputs, TextTextSummarizationOutputs, TextTextTranslationOutputs, TextTextVatCountryGuessingOutputs, TextTextWebsiteClassificationOutputs, TextTextWordAlignmentOutputs, VideoTextActionClassificationsOutputs } from './output-models';
export declare abstract class Shortcuts implements Omit<FromAudioToText, 'httpClient'>, Omit<FromImageToImage, 'httpClient'>, Omit<FromImageToText, 'httpClient'>, Omit<FromTextToImage, 'httpClient'>, Omit<FromTextToText, 'httpClient'>, Omit<FromVideoToText, 'httpClient'> {
    abstract fromAudio(): FromAudio;
    audioTranscription(args: AudioTextAudioTranscriptionInputs): Promise<AudioTextAudioTranscriptionOutputs>;
    speakerDiarization(args: AudioTextSpeakerDiarizationInputs): Promise<AudioTextSpeakerDiarizationOutputs>;
    speakerGenderClassification(args: AudioTextSpeakerGenderClassificationInputs): Promise<AudioTextSpeakerGenderClassificationOutputs>;
    abstract fromImage(): FromImage;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundRemovalOutputsOneSampleAsUrl>;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundReplacementOutputsOneSampleAsUrl>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs>;
    colorization(args: ImageImageColorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageColorizationOutputsOneSampleAsUrl>;
    colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs>;
    deblurring(args: ImageImageDeblurringInputs & {
        asUrl: true;
    }): Promise<ImageImageDeblurringOutputsOneSampleAsUrl>;
    deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs>;
    enhancement(args: ImageImageEnhancementInputs & {
        asUrl: true;
    }): Promise<ImageImageEnhancementOutputsOneSampleAsUrl>;
    enhancement(args: ImageImageEnhancementInputs): Promise<ImageImageEnhancementOutputs>;
    faceBluring(args: ImageImageFaceBluringInputs & {
        asUrl: true;
    }): Promise<ImageImageFaceBluringOutputsOneSampleAsUrl>;
    faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs): Promise<ImageImageImageGuidedInpaintingOutputs>;
    inpainting(args: ImageImageInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageInpaintingOutputsOneSampleAsUrl>;
    inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs>;
    uncolorization(args: ImageImageUncolorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageUncolorizationOutputsOneSampleAsUrl>;
    uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs>;
    classification(args: ImageTextClassificationInputs): Promise<ImageTextClassificationOutputs>;
    ocr(args: ImageTextOcrInputs): Promise<ImageTextOcrOutputs>;
    abstract fromText(): FromText;
    imageGeneration(args: TextImageImageGenerationInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<TextImageImageGenerationOutputsOneSampleAsUrl>;
    imageGeneration(args: TextImageImageGenerationInputs & {
        asUrl: true;
    }): Promise<TextImageImageGenerationOutputsMultipleSamplesAsUrl>;
    imageGeneration(args: TextImageImageGenerationInputs & {
        samples: 1;
    }): Promise<TextImageImageGenerationOutputsOneSample>;
    imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputsMultipleSamples>;
    addressFormatting(args: TextTextAddressFormattingInputs): Promise<TextTextAddressFormattingOutputs>;
    ageFromName(args: TextTextAgeFromNameInputs): Promise<TextTextAgeFromNameOutputs>;
    anonymization(args: TextTextAnonymizationInputs): Promise<TextTextAnonymizationOutputs>;
    autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs>;
    bulletPointGeneration(args: TextTextBulletPointGenerationInputs): Promise<TextTextBulletPointGenerationOutputs>;
    commandGeneration(args: TextTextCommandGenerationInputs): Promise<TextTextCommandGenerationOutputs>;
    companyCategorization(args: TextTextCompanyCategorizationInputs): Promise<TextTextCompanyCategorizationOutputs>;
    companyNameNormalization(args: TextTextCompanyNameNormalizationInputs): Promise<TextTextCompanyNameNormalizationOutputs>;
    companyStockCode(args: TextTextCompanyStockCodeInputs): Promise<TextTextCompanyStockCodeOutputs>;
    conversationSummarization(args: TextTextConversationSummarizationInputs): Promise<TextTextConversationSummarizationOutputs>;
    countryFromName(args: TextTextCountryFromNameInputs): Promise<TextTextCountryFromNameOutputs>;
    dateCleaning(args: TextTextDateCleaningInputs): Promise<TextTextDateCleaningOutputs>;
    emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs>;
    genderFromName(args: TextTextGenderFromNameInputs): Promise<TextTextGenderFromNameOutputs>;
    gpsAddressFormatting(args: TextTextGpsAddressFormattingInputs): Promise<TextTextGpsAddressFormattingOutputs>;
    gpt3(args: TextTextGpt3Inputs): Promise<TextTextGpt3Outputs>;
    guessCity(args: TextTextGuessCityInputs): Promise<TextTextGuessCityOutputs>;
    guessCountry(args: TextTextGuessCountryInputs): Promise<TextTextGuessCountryOutputs>;
    guessIntent(args: TextTextGuessIntentInputs): Promise<TextTextGuessIntentOutputs>;
    hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs>;
    headlineGeneration(args: TextTextHeadlineGenerationInputs): Promise<TextTextHeadlineGenerationOutputs>;
    imageGenerationPromptBeautifier(args: TextTextImageGenerationPromptBeautifierInputs): Promise<TextTextImageGenerationPromptBeautifierOutputs>;
    keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs>;
    languageCodes(args: TextTextLanguageCodesInputs): Promise<TextTextLanguageCodesOutputs>;
    languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs>;
    languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs>;
    namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs>;
    nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs>;
    nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs>;
    productOwnership(args: TextTextProductOwnershipInputs): Promise<TextTextProductOwnershipOutputs>;
    productSentiment(args: TextTextProductSentimentInputs): Promise<TextTextProductSentimentOutputs>;
    programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs>;
    punctuationRestoration(args: TextTextPunctuationRestorationInputs): Promise<TextTextPunctuationRestorationOutputs>;
    questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs>;
    sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs>;
    sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs>;
    similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs>;
    speakerRecognition(args: TextTextSpeakerRecognitionInputs): Promise<TextTextSpeakerRecognitionOutputs>;
    summarization(args: TextTextSummarizationInputs): Promise<TextTextSummarizationOutputs>;
    translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs>;
    vatCountryGuessing(args: TextTextVatCountryGuessingInputs): Promise<TextTextVatCountryGuessingOutputs>;
    websiteClassification(args: TextTextWebsiteClassificationInputs): Promise<TextTextWebsiteClassificationOutputs>;
    wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs>;
    abstract fromVideo(): FromVideo;
    actionClassifications(args: VideoTextActionClassificationsInputs): Promise<VideoTextActionClassificationsOutputs>;
}

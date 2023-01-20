import { FromAudio } from './from-audio';
import { FromAudioToText } from './from-audio-to-text';
import { FromImage } from './from-image';
import { FromImageToImage } from './from-image-to-image';
import { FromImageToText } from './from-image-to-text';
import { FromText } from './from-text';
import { FromTextToImage } from './from-text-to-image';
import { FromTextToText } from './from-text-to-text';
import { AudioTextAudioTranscriptionInputs, AudioTextSpeakerDiarizationInputs, ImageImageBackgroundRemovalInputs, ImageImageBackgroundReplacementInputs, ImageImageColorizationInputs, ImageImageDeblurringInputs, ImageImageUncolorizationInputs, ImageTextClassificationInputs, ImageTextOcrInputs, TextImageImageGenerationInputs, TextTextAgeFromNameInputs, TextTextAnonymizationInputs, TextTextBulletPointGenerationInputs, TextTextCommandGenerationInputs, TextTextCompanyCategorizationInputs, TextTextCompanyNameNormalizationInputs, TextTextCompanyStockCodeInputs, TextTextCountryFromNameInputs, TextTextDateCleaningInputs, TextTextEmotionRecognitionInputs, TextTextGenderFromNameInputs, TextTextGpsAddressFormattingInputs, TextTextGpt3Inputs, TextTextGuessCityInputs, TextTextGuessCountryInputs, TextTextGuessIntentInputs, TextTextHateSpeechDetectionInputs, TextTextHeadlineGenerationInputs, TextTextKeywordExtractionInputs, TextTextLanguageCodesInputs, TextTextLanguageDetectionInputs, TextTextLanguageGenerationInputs, TextTextNamedEntityRecognitionInputs, TextTextNextWordPredictionInputs, TextTextProductOwnershipInputs, TextTextProductSentimentInputs, TextTextPunctuationRestorationInputs, TextTextQuestionAnsweringInputs, TextTextSentimentAnalysisInputs, TextTextSimilarityInputs, TextTextSpeakerRecognitionInputs, TextTextTranslationInputs, TextTextVatCountryGuessingInputs, TextTextWebsiteClassificationInputs } from './input-models';
import { AudioTextAudioTranscriptionOutputs, AudioTextSpeakerDiarizationOutputs, ImageImageBackgroundRemovalOutputsOneSampleAsUrl, ImageImageBackgroundReplacementOutputsOneSampleAsUrl, ImageImageColorizationOutputsOneSampleAsUrl, ImageImageDeblurringOutputsOneSampleAsUrl, ImageImageUncolorizationOutputsOneSampleAsUrl, ImageTextClassificationOutputs, ImageTextOcrOutputs, TextImageImageGenerationOutputsMultipleSamples, TextImageImageGenerationOutputsOneSample, TextImageImageGenerationOutputsMultipleSamplesAsUrl, TextImageImageGenerationOutputsOneSampleAsUrl, TextTextAgeFromNameOutputs, TextTextAnonymizationOutputs, TextTextBulletPointGenerationOutputs, TextTextCommandGenerationOutputs, TextTextCompanyCategorizationOutputs, TextTextCompanyNameNormalizationOutputs, TextTextCompanyStockCodeOutputs, TextTextCountryFromNameOutputs, TextTextDateCleaningOutputs, TextTextEmotionRecognitionOutputs, TextTextGenderFromNameOutputs, TextTextGpsAddressFormattingOutputs, TextTextGpt3Outputs, TextTextGuessCityOutputs, TextTextGuessCountryOutputs, TextTextGuessIntentOutputs, TextTextHateSpeechDetectionOutputs, TextTextHeadlineGenerationOutputs, TextTextKeywordExtractionOutputs, TextTextLanguageCodesOutputs, TextTextLanguageDetectionOutputs, TextTextLanguageGenerationOutputs, TextTextNamedEntityRecognitionOutputs, TextTextNextWordPredictionOutputs, TextTextProductOwnershipOutputs, TextTextProductSentimentOutputs, TextTextPunctuationRestorationOutputs, TextTextQuestionAnsweringOutputs, TextTextSentimentAnalysisOutputs, TextTextSimilarityOutputs, TextTextSpeakerRecognitionOutputs, TextTextTranslationOutputs, TextTextVatCountryGuessingOutputs, TextTextWebsiteClassificationOutputs } from './output-models';
export declare abstract class Shortcuts implements Omit<FromAudioToText, 'httpClient'>, Omit<FromImageToImage, 'httpClient'>, Omit<FromImageToText, 'httpClient'>, Omit<FromTextToImage, 'httpClient'>, Omit<FromTextToText, 'httpClient'> {
    abstract fromAudio(): FromAudio;
    audioTranscription(args: AudioTextAudioTranscriptionInputs): Promise<AudioTextAudioTranscriptionOutputs>;
    speakerDiarization(args: AudioTextSpeakerDiarizationInputs): Promise<AudioTextSpeakerDiarizationOutputs>;
    abstract fromImage(): FromImage;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundRemovalOutputsOneSampleAsUrl>;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ArrayBuffer>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundReplacementOutputsOneSampleAsUrl>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ArrayBuffer>;
    colorization(args: ImageImageColorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageColorizationOutputsOneSampleAsUrl>;
    colorization(args: ImageImageColorizationInputs): Promise<ArrayBuffer>;
    deblurring(args: ImageImageDeblurringInputs & {
        asUrl: true;
    }): Promise<ImageImageDeblurringOutputsOneSampleAsUrl>;
    deblurring(args: ImageImageDeblurringInputs): Promise<ArrayBuffer>;
    uncolorization(args: ImageImageUncolorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageUncolorizationOutputsOneSampleAsUrl>;
    uncolorization(args: ImageImageUncolorizationInputs): Promise<ArrayBuffer>;
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
    ageFromName(args: TextTextAgeFromNameInputs): Promise<TextTextAgeFromNameOutputs>;
    anonymization(args: TextTextAnonymizationInputs): Promise<TextTextAnonymizationOutputs>;
    bulletPointGeneration(args: TextTextBulletPointGenerationInputs): Promise<TextTextBulletPointGenerationOutputs>;
    commandGeneration(args: TextTextCommandGenerationInputs): Promise<TextTextCommandGenerationOutputs>;
    companyCategorization(args: TextTextCompanyCategorizationInputs): Promise<TextTextCompanyCategorizationOutputs>;
    companyNameNormalization(args: TextTextCompanyNameNormalizationInputs): Promise<TextTextCompanyNameNormalizationOutputs>;
    companyStockCode(args: TextTextCompanyStockCodeInputs): Promise<TextTextCompanyStockCodeOutputs>;
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
    keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs>;
    languageCodes(args: TextTextLanguageCodesInputs): Promise<TextTextLanguageCodesOutputs>;
    languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs>;
    languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs>;
    namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs>;
    nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs>;
    productOwnership(args: TextTextProductOwnershipInputs): Promise<TextTextProductOwnershipOutputs>;
    productSentiment(args: TextTextProductSentimentInputs): Promise<TextTextProductSentimentOutputs>;
    punctuationRestoration(args: TextTextPunctuationRestorationInputs): Promise<TextTextPunctuationRestorationOutputs>;
    questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs>;
    sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs>;
    similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs>;
    speakerRecognition(args: TextTextSpeakerRecognitionInputs): Promise<TextTextSpeakerRecognitionOutputs>;
    translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs>;
    vatCountryGuessing(args: TextTextVatCountryGuessingInputs): Promise<TextTextVatCountryGuessingOutputs>;
    websiteClassification(args: TextTextWebsiteClassificationInputs): Promise<TextTextWebsiteClassificationOutputs>;
}

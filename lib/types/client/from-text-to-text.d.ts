import { TextTextAddressFormattingInputs, TextTextAgeFromNameInputs, TextTextAnonymizationInputs, TextTextAutocorrectInputs, TextTextBulletPointGenerationInputs, TextTextCommandGenerationInputs, TextTextCompanyCategorizationInputs, TextTextCompanyNameNormalizationInputs, TextTextCompanyStockCodeInputs, TextTextConversationSummarizationInputs, TextTextCountryFromNameInputs, TextTextDateCleaningInputs, TextTextEmotionRecognitionInputs, TextTextGenderFromNameInputs, TextTextGpsAddressFormattingInputs, TextTextGpt3Inputs, TextTextGuessCityInputs, TextTextGuessCountryInputs, TextTextGuessIntentInputs, TextTextHateSpeechDetectionInputs, TextTextHeadlineGenerationInputs, TextTextImageGenerationPromptBeautifierInputs, TextTextKeywordExtractionInputs, TextTextLanguageCodesInputs, TextTextLanguageDetectionInputs, TextTextLanguageGenerationInputs, TextTextNamedEntityRecognitionInputs, TextTextNextSentencePredictionInputs, TextTextNextWordPredictionInputs, TextTextProductOwnershipInputs, TextTextProductSentimentInputs, TextTextProgrammingLanguageGenerationInputs, TextTextPunctuationRestorationInputs, TextTextQuestionAnsweringInputs, TextTextSentenceParaphraserInputs, TextTextSentimentAnalysisInputs, TextTextSimilarityInputs, TextTextSpeakerRecognitionInputs, TextTextSummarizationInputs, TextTextTranslationInputs, TextTextVatCountryGuessingInputs, TextTextWebsiteClassificationInputs, TextTextWordAlignmentInputs } from './input-models';
import { TextTextAddressFormattingOutputs, TextTextAgeFromNameOutputs, TextTextAnonymizationOutputs, TextTextAutocorrectOutputs, TextTextBulletPointGenerationOutputs, TextTextCommandGenerationOutputs, TextTextCompanyCategorizationOutputs, TextTextCompanyNameNormalizationOutputs, TextTextCompanyStockCodeOutputs, TextTextConversationSummarizationOutputs, TextTextCountryFromNameOutputs, TextTextDateCleaningOutputs, TextTextEmotionRecognitionOutputs, TextTextGenderFromNameOutputs, TextTextGpsAddressFormattingOutputs, TextTextGpt3Outputs, TextTextGuessCityOutputs, TextTextGuessCountryOutputs, TextTextGuessIntentOutputs, TextTextHateSpeechDetectionOutputs, TextTextHeadlineGenerationOutputs, TextTextImageGenerationPromptBeautifierOutputs, TextTextKeywordExtractionOutputs, TextTextLanguageCodesOutputs, TextTextLanguageDetectionOutputs, TextTextLanguageGenerationOutputs, TextTextNamedEntityRecognitionOutputs, TextTextNextSentencePredictionOutputs, TextTextNextWordPredictionOutputs, TextTextProductOwnershipOutputs, TextTextProductSentimentOutputs, TextTextProgrammingLanguageGenerationOutputs, TextTextPunctuationRestorationOutputs, TextTextQuestionAnsweringOutputs, TextTextSentenceParaphraserOutputs, TextTextSentimentAnalysisOutputs, TextTextSimilarityOutputs, TextTextSpeakerRecognitionOutputs, TextTextSummarizationOutputs, TextTextTranslationOutputs, TextTextVatCountryGuessingOutputs, TextTextWebsiteClassificationOutputs, TextTextWordAlignmentOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromTextToText {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
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
}

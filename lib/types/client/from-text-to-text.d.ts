import { TextTextAdGenerationInputs, TextTextAddressFormattingInputs, TextTextAgeFromNameInputs, TextTextAnonymizationInputs, TextTextArticleGenerationInputs, TextTextAutocorrectInputs, TextTextBulletPointGenerationInputs, TextTextCleanCityInputs, TextTextCleanCountryInputs, TextTextCommandGenerationInputs, TextTextConversationSummarizationInputs, TextTextCountryFromNameInputs, TextTextEmotionRecognitionInputs, TextTextGenderFromNameInputs, TextTextGpsAddressFormattingInputs, TextTextHateSpeechDetectionInputs, TextTextHeadlineGenerationInputs, TextTextIntentClassificationInputs, TextTextKeywordExtractionInputs, TextTextLanguageDetectionInputs, TextTextLanguageGenerationInputs, TextTextNamedEntityRecognitionInputs, TextTextNextSentencePredictionInputs, TextTextNextWordPredictionInputs, TextTextProgrammingLanguageGenerationInputs, TextTextPunctuationRestorationInputs, TextTextQuestionAnsweringInputs, TextTextSentenceParaphraserInputs, TextTextSentimentAnalysisInputs, TextTextSimilarityInputs, TextTextSummarizationInputs, TextTextTranslationInputs, TextTextWordAlignmentInputs } from './input-models';
import { TextTextAdGenerationOutputs, TextTextAddressFormattingOutputs, TextTextAgeFromNameOutputs, TextTextAnonymizationOutputs, TextTextArticleGenerationOutputs, TextTextAutocorrectOutputs, TextTextBulletPointGenerationOutputs, TextTextCleanCityOutputs, TextTextCleanCountryOutputs, TextTextCommandGenerationOutputs, TextTextConversationSummarizationOutputs, TextTextCountryFromNameOutputs, TextTextEmotionRecognitionOutputs, TextTextGenderFromNameOutputs, TextTextGpsAddressFormattingOutputs, TextTextHateSpeechDetectionOutputs, TextTextHeadlineGenerationOutputs, TextTextIntentClassificationOutputs, TextTextKeywordExtractionOutputs, TextTextLanguageDetectionOutputs, TextTextLanguageGenerationOutputs, TextTextNamedEntityRecognitionOutputs, TextTextNextSentencePredictionOutputs, TextTextNextWordPredictionOutputs, TextTextProgrammingLanguageGenerationOutputs, TextTextPunctuationRestorationOutputs, TextTextQuestionAnsweringOutputs, TextTextSentenceParaphraserOutputs, TextTextSentimentAnalysisOutputs, TextTextSimilarityOutputs, TextTextSummarizationOutputs, TextTextTranslationOutputs, TextTextWordAlignmentOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromTextToText {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    adGeneration(args: TextTextAdGenerationInputs): Promise<TextTextAdGenerationOutputs>;
    addressFormatting(args: TextTextAddressFormattingInputs): Promise<TextTextAddressFormattingOutputs>;
    ageFromName(args: TextTextAgeFromNameInputs): Promise<TextTextAgeFromNameOutputs>;
    anonymization(args: TextTextAnonymizationInputs): Promise<TextTextAnonymizationOutputs>;
    articleGeneration(args: TextTextArticleGenerationInputs): Promise<TextTextArticleGenerationOutputs>;
    autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs>;
    bulletPointGeneration(args: TextTextBulletPointGenerationInputs): Promise<TextTextBulletPointGenerationOutputs>;
    cleanCity(args: TextTextCleanCityInputs): Promise<TextTextCleanCityOutputs>;
    cleanCountry(args: TextTextCleanCountryInputs): Promise<TextTextCleanCountryOutputs>;
    commandGeneration(args: TextTextCommandGenerationInputs): Promise<TextTextCommandGenerationOutputs>;
    conversationSummarization(args: TextTextConversationSummarizationInputs): Promise<TextTextConversationSummarizationOutputs>;
    countryFromName(args: TextTextCountryFromNameInputs): Promise<TextTextCountryFromNameOutputs>;
    emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs>;
    genderFromName(args: TextTextGenderFromNameInputs): Promise<TextTextGenderFromNameOutputs>;
    gpsAddressFormatting(args: TextTextGpsAddressFormattingInputs): Promise<TextTextGpsAddressFormattingOutputs>;
    hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs>;
    headlineGeneration(args: TextTextHeadlineGenerationInputs): Promise<TextTextHeadlineGenerationOutputs>;
    intentClassification(args: TextTextIntentClassificationInputs): Promise<TextTextIntentClassificationOutputs>;
    keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs>;
    languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs>;
    languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs>;
    namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs>;
    nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs>;
    nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs>;
    programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs>;
    punctuationRestoration(args: TextTextPunctuationRestorationInputs): Promise<TextTextPunctuationRestorationOutputs>;
    questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs>;
    sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs>;
    sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs>;
    similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs>;
    summarization(args: TextTextSummarizationInputs): Promise<TextTextSummarizationOutputs>;
    translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs>;
    wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs>;
}

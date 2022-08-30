import { TextTextAdGenerationInputs, TextTextArticleGenerationInputs, TextTextAutocorrectInputs, TextTextEmotionRecognitionInputs, TextTextHateSpeechDetectionInputs, TextTextIntentClassificationInputs, TextTextKeywordExtractionInputs, TextTextLanguageDetectionInputs, TextTextLanguageGenerationInputs, TextTextNamedEntityRecognitionInputs, TextTextNextSentencePredictionInputs, TextTextNextWordPredictionInputs, TextTextPluralInputs, TextTextProgrammingLanguageGenerationInputs, TextTextQuestionAnsweringInputs, TextTextSentenceParaphraserInputs, TextTextSentimentAnalysisInputs, TextTextSimilarityInputs, TextTextSummarizationInputs, TextTextTranslationInputs, TextTextWordAlignmentInputs } from './input-models';
import { TextTextAdGenerationOutputs, TextTextArticleGenerationOutputs, TextTextAutocorrectOutputs, TextTextEmotionRecognitionOutputs, TextTextHateSpeechDetectionOutputs, TextTextIntentClassificationOutputs, TextTextKeywordExtractionOutputs, TextTextLanguageDetectionOutputs, TextTextLanguageGenerationOutputs, TextTextNamedEntityRecognitionOutputs, TextTextNextSentencePredictionOutputs, TextTextNextWordPredictionOutputs, TextTextPluralOutputs, TextTextProgrammingLanguageGenerationOutputs, TextTextQuestionAnsweringOutputs, TextTextSentenceParaphraserOutputs, TextTextSentimentAnalysisOutputs, TextTextSimilarityOutputs, TextTextSummarizationOutputs, TextTextTranslationOutputs, TextTextWordAlignmentOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromTextToText {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    adGeneration(args: TextTextAdGenerationInputs): Promise<TextTextAdGenerationOutputs>;
    articleGeneration(args: TextTextArticleGenerationInputs): Promise<TextTextArticleGenerationOutputs>;
    autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs>;
    emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs>;
    hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs>;
    intentClassification(args: TextTextIntentClassificationInputs): Promise<TextTextIntentClassificationOutputs>;
    keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs>;
    languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs>;
    languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs>;
    namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs>;
    nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs>;
    nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs>;
    plural(args: TextTextPluralInputs): Promise<TextTextPluralOutputs>;
    programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs>;
    questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs>;
    sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs>;
    sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs>;
    similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs>;
    summarization(args: TextTextSummarizationInputs): Promise<TextTextSummarizationOutputs>;
    translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs>;
    wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs>;
}

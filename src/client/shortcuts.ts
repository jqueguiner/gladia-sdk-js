/* Generated file with "scripts/generate-sdk.ts" */

import { FromAudio } from './from-audio'
import { FromAudioToText } from './from-audio-to-text'
import { FromImage } from './from-image'
import { FromImageToImage } from './from-image-to-image'
import { FromImageToText } from './from-image-to-text'
import { FromText } from './from-text'
import { FromTextToImage } from './from-text-to-image'
import { FromTextToText } from './from-text-to-text'
import {
  AudioTextAudioTranscriptionInputs,
  ImageImageBackgroundRemovalInputs,
  ImageImageBackgroundReplacementInputs,
  ImageImageColorizationInputs,
  ImageImageDeblurringInputs,
  ImageImageEnhancementInputs,
  ImageImageFaceBluringInputs,
  ImageImageGuidedInpaintingInputs,
  ImageImageInpaintingInputs,
  ImageImageSuperResolutionInputs,
  ImageImageUncolorizationInputs,
  ImageTextClassificationInputs,
  ImageTextOcrInputs,
  TextImageImageGenerationInputs,
  TextTextAdGenerationInputs,
  TextTextAddressFormattingInputs,
  TextTextAgeFromNameInputs,
  TextTextAnonymizationInputs,
  TextTextArticleGenerationInputs,
  TextTextAutocorrectInputs,
  TextTextBulletPointGenerationInputs,
  TextTextCleanCityInputs,
  TextTextCleanCountryInputs,
  TextTextCommandGenerationInputs,
  TextTextConversationSummarizationInputs,
  TextTextCountryFromNameInputs,
  TextTextEmotionRecognitionInputs,
  TextTextGenderFromNameInputs,
  TextTextGpsAddressFormattingInputs,
  TextTextHateSpeechDetectionInputs,
  TextTextHeadlineGenerationInputs,
  TextTextIntentClassificationInputs,
  TextTextKeywordExtractionInputs,
  TextTextLanguageDetectionInputs,
  TextTextLanguageGenerationInputs,
  TextTextNamedEntityRecognitionInputs,
  TextTextNextSentencePredictionInputs,
  TextTextNextWordPredictionInputs,
  TextTextProgrammingLanguageGenerationInputs,
  TextTextPunctuationRestorationInputs,
  TextTextQuestionAnsweringInputs,
  TextTextSentenceParaphraserInputs,
  TextTextSentimentAnalysisInputs,
  TextTextSimilarityInputs,
  TextTextSummarizationInputs,
  TextTextTranslationInputs,
  TextTextWordAlignmentInputs,
} from './input-models'
import {
  AudioTextAudioTranscriptionOutputs,
  ImageImageBackgroundRemovalOutputs,
  ImageImageBackgroundReplacementOutputs,
  ImageImageColorizationOutputs,
  ImageImageDeblurringOutputs,
  ImageImageEnhancementOutputs,
  ImageImageFaceBluringOutputs,
  ImageImageGuidedInpaintingOutputs,
  ImageImageInpaintingOutputs,
  ImageImageSuperResolutionOutputs,
  ImageImageUncolorizationOutputs,
  ImageTextClassificationOutputs,
  ImageTextOcrOutputs,
  TextImageImageGenerationOutputs,
  TextImageImageGenerationOutputsMultipleSamples,
  TextImageImageGenerationOutputsOneSample,
  TextTextAdGenerationOutputs,
  TextTextAddressFormattingOutputs,
  TextTextAgeFromNameOutputs,
  TextTextAnonymizationOutputs,
  TextTextArticleGenerationOutputs,
  TextTextAutocorrectOutputs,
  TextTextBulletPointGenerationOutputs,
  TextTextCleanCityOutputs,
  TextTextCleanCountryOutputs,
  TextTextCommandGenerationOutputs,
  TextTextConversationSummarizationOutputs,
  TextTextCountryFromNameOutputs,
  TextTextEmotionRecognitionOutputs,
  TextTextGenderFromNameOutputs,
  TextTextGpsAddressFormattingOutputs,
  TextTextHateSpeechDetectionOutputs,
  TextTextHeadlineGenerationOutputs,
  TextTextIntentClassificationOutputs,
  TextTextKeywordExtractionOutputs,
  TextTextLanguageDetectionOutputs,
  TextTextLanguageGenerationOutputs,
  TextTextNamedEntityRecognitionOutputs,
  TextTextNextSentencePredictionOutputs,
  TextTextNextWordPredictionOutputs,
  TextTextProgrammingLanguageGenerationOutputs,
  TextTextPunctuationRestorationOutputs,
  TextTextQuestionAnsweringOutputs,
  TextTextSentenceParaphraserOutputs,
  TextTextSentimentAnalysisOutputs,
  TextTextSimilarityOutputs,
  TextTextSummarizationOutputs,
  TextTextTranslationOutputs,
  TextTextWordAlignmentOutputs,
} from './output-models';

export abstract class Shortcuts implements
  Omit<FromAudioToText, 'httpClient'>,
  Omit<FromImageToImage, 'httpClient'>,
  Omit<FromImageToText, 'httpClient'>,
  Omit<FromTextToImage, 'httpClient'>,
  Omit<FromTextToText, 'httpClient'>
{

  abstract fromAudio(): FromAudio;

  // AUDIO => TEXT

  audioTranscription(args: AudioTextAudioTranscriptionInputs): Promise<AudioTextAudioTranscriptionOutputs> {
    return this.fromAudio().toText().audioTranscription(args);
  }

  abstract fromImage(): FromImage;

  // IMAGE => IMAGE

  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs> {
    return this.fromImage().toImage().backgroundRemoval(args);
  }

  backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs> {
    return this.fromImage().toImage().backgroundReplacement(args);
  }

  colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs> {
    return this.fromImage().toImage().colorization(args);
  }

  deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs> {
    return this.fromImage().toImage().deblurring(args);
  }

  enhancement(args: ImageImageEnhancementInputs): Promise<ImageImageEnhancementOutputs> {
    return this.fromImage().toImage().enhancement(args);
  }

  faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs> {
    return this.fromImage().toImage().faceBluring(args);
  }

  guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs> {
    return this.fromImage().toImage().guidedInpainting(args);
  }

  inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs> {
    return this.fromImage().toImage().inpainting(args);
  }

  superResolution(args: ImageImageSuperResolutionInputs): Promise<ImageImageSuperResolutionOutputs> {
    return this.fromImage().toImage().superResolution(args);
  }

  uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs> {
    return this.fromImage().toImage().uncolorization(args);
  }

  // IMAGE => TEXT

  classification(args: ImageTextClassificationInputs): Promise<ImageTextClassificationOutputs> {
    return this.fromImage().toText().classification(args);
  }

  ocr(args: ImageTextOcrInputs): Promise<ImageTextOcrOutputs> {
    return this.fromImage().toText().ocr(args);
  }

  abstract fromText(): FromText;

  // TEXT => IMAGE

  imageGeneration(args: TextImageImageGenerationInputs & { samples: 1 }): Promise<TextImageImageGenerationOutputsOneSample>;
  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputsMultipleSamples>;
  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputs> {
    return this.fromText().toImage().imageGeneration(args);
  }

  // TEXT => TEXT

  adGeneration(args: TextTextAdGenerationInputs): Promise<TextTextAdGenerationOutputs> {
    return this.fromText().toText().adGeneration(args);
  }

  addressFormatting(args: TextTextAddressFormattingInputs): Promise<TextTextAddressFormattingOutputs> {
    return this.fromText().toText().addressFormatting(args);
  }

  ageFromName(args: TextTextAgeFromNameInputs): Promise<TextTextAgeFromNameOutputs> {
    return this.fromText().toText().ageFromName(args);
  }

  anonymization(args: TextTextAnonymizationInputs): Promise<TextTextAnonymizationOutputs> {
    return this.fromText().toText().anonymization(args);
  }

  articleGeneration(args: TextTextArticleGenerationInputs): Promise<TextTextArticleGenerationOutputs> {
    return this.fromText().toText().articleGeneration(args);
  }

  autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs> {
    return this.fromText().toText().autocorrect(args);
  }

  bulletPointGeneration(args: TextTextBulletPointGenerationInputs): Promise<TextTextBulletPointGenerationOutputs> {
    return this.fromText().toText().bulletPointGeneration(args);
  }

  cleanCity(args: TextTextCleanCityInputs): Promise<TextTextCleanCityOutputs> {
    return this.fromText().toText().cleanCity(args);
  }

  cleanCountry(args: TextTextCleanCountryInputs): Promise<TextTextCleanCountryOutputs> {
    return this.fromText().toText().cleanCountry(args);
  }

  commandGeneration(args: TextTextCommandGenerationInputs): Promise<TextTextCommandGenerationOutputs> {
    return this.fromText().toText().commandGeneration(args);
  }

  conversationSummarization(args: TextTextConversationSummarizationInputs): Promise<TextTextConversationSummarizationOutputs> {
    return this.fromText().toText().conversationSummarization(args);
  }

  countryFromName(args: TextTextCountryFromNameInputs): Promise<TextTextCountryFromNameOutputs> {
    return this.fromText().toText().countryFromName(args);
  }

  emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs> {
    return this.fromText().toText().emotionRecognition(args);
  }

  genderFromName(args: TextTextGenderFromNameInputs): Promise<TextTextGenderFromNameOutputs> {
    return this.fromText().toText().genderFromName(args);
  }

  gpsAddressFormatting(args: TextTextGpsAddressFormattingInputs): Promise<TextTextGpsAddressFormattingOutputs> {
    return this.fromText().toText().gpsAddressFormatting(args);
  }

  hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs> {
    return this.fromText().toText().hateSpeechDetection(args);
  }

  headlineGeneration(args: TextTextHeadlineGenerationInputs): Promise<TextTextHeadlineGenerationOutputs> {
    return this.fromText().toText().headlineGeneration(args);
  }

  intentClassification(args: TextTextIntentClassificationInputs): Promise<TextTextIntentClassificationOutputs> {
    return this.fromText().toText().intentClassification(args);
  }

  keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs> {
    return this.fromText().toText().keywordExtraction(args);
  }

  languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs> {
    return this.fromText().toText().languageDetection(args);
  }

  languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs> {
    return this.fromText().toText().languageGeneration(args);
  }

  namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs> {
    return this.fromText().toText().namedEntityRecognition(args);
  }

  nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs> {
    return this.fromText().toText().nextSentencePrediction(args);
  }

  nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs> {
    return this.fromText().toText().nextWordPrediction(args);
  }

  programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs> {
    return this.fromText().toText().programmingLanguageGeneration(args);
  }

  punctuationRestoration(args: TextTextPunctuationRestorationInputs): Promise<TextTextPunctuationRestorationOutputs> {
    return this.fromText().toText().punctuationRestoration(args);
  }

  questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs> {
    return this.fromText().toText().questionAnswering(args);
  }

  sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs> {
    return this.fromText().toText().sentenceParaphraser(args);
  }

  sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs> {
    return this.fromText().toText().sentimentAnalysis(args);
  }

  similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs> {
    return this.fromText().toText().similarity(args);
  }

  summarization(args: TextTextSummarizationInputs): Promise<TextTextSummarizationOutputs> {
    return this.fromText().toText().summarization(args);
  }

  translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs> {
    return this.fromText().toText().translation(args);
  }

  wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs> {
    return this.fromText().toText().wordAlignment(args);
  }

}

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
  AudioTextSpeakerDiarizationInputs,
  ImageImageBackgroundRemovalInputs,
  ImageImageBackgroundReplacementInputs,
  ImageImageColorizationInputs,
  ImageImageDeblurringInputs,
  ImageImageUncolorizationInputs,
  ImageTextClassificationInputs,
  ImageTextOcrInputs,
  TextImageImageGenerationInputs,
  TextTextAgeFromNameInputs,
  TextTextAnonymizationInputs,
  TextTextBulletPointGenerationInputs,
  TextTextCommandGenerationInputs,
  TextTextCompanyCategorizationInputs,
  TextTextCompanyNameNormalizationInputs,
  TextTextCompanyStockCodeInputs,
  TextTextCountryFromNameInputs,
  TextTextDateCleaningInputs,
  TextTextEmotionRecognitionInputs,
  TextTextGenderFromNameInputs,
  TextTextGpsAddressFormattingInputs,
  TextTextGpt3Inputs,
  TextTextGuessCityInputs,
  TextTextGuessCountryInputs,
  TextTextGuessIntentInputs,
  TextTextHateSpeechDetectionInputs,
  TextTextHeadlineGenerationInputs,
  TextTextKeywordExtractionInputs,
  TextTextLanguageCodesInputs,
  TextTextLanguageDetectionInputs,
  TextTextLanguageGenerationInputs,
  TextTextNamedEntityRecognitionInputs,
  TextTextNextWordPredictionInputs,
  TextTextProductOwnershipInputs,
  TextTextProductSentimentInputs,
  TextTextPunctuationRestorationInputs,
  TextTextQuestionAnsweringInputs,
  TextTextSentimentAnalysisInputs,
  TextTextSimilarityInputs,
  TextTextSpeakerRecognitionInputs,
  TextTextTranslationInputs,
  TextTextVatCountryGuessingInputs,
  TextTextWebsiteClassificationInputs,
} from './input-models'
import {
  AudioTextAudioTranscriptionOutputs,
  AudioTextSpeakerDiarizationOutputs,
  ImageImageBackgroundRemovalOutputs,
  ImageImageBackgroundRemovalOutputsOneSampleAsUrl,
  ImageImageBackgroundReplacementOutputs,
  ImageImageBackgroundReplacementOutputsOneSampleAsUrl,
  ImageImageColorizationOutputs,
  ImageImageColorizationOutputsOneSampleAsUrl,
  ImageImageDeblurringOutputs,
  ImageImageDeblurringOutputsOneSampleAsUrl,
  ImageImageUncolorizationOutputs,
  ImageImageUncolorizationOutputsOneSampleAsUrl,
  ImageTextClassificationOutputs,
  ImageTextOcrOutputs,
  TextImageImageGenerationOutputs,
  TextImageImageGenerationOutputsMultipleSamples,
  TextImageImageGenerationOutputsOneSample,
  TextImageImageGenerationOutputsMultipleSamplesAsUrl,
  TextImageImageGenerationOutputsOneSampleAsUrl,
  TextTextAgeFromNameOutputs,
  TextTextAnonymizationOutputs,
  TextTextBulletPointGenerationOutputs,
  TextTextCommandGenerationOutputs,
  TextTextCompanyCategorizationOutputs,
  TextTextCompanyNameNormalizationOutputs,
  TextTextCompanyStockCodeOutputs,
  TextTextCountryFromNameOutputs,
  TextTextDateCleaningOutputs,
  TextTextEmotionRecognitionOutputs,
  TextTextGenderFromNameOutputs,
  TextTextGpsAddressFormattingOutputs,
  TextTextGpt3Outputs,
  TextTextGuessCityOutputs,
  TextTextGuessCountryOutputs,
  TextTextGuessIntentOutputs,
  TextTextHateSpeechDetectionOutputs,
  TextTextHeadlineGenerationOutputs,
  TextTextKeywordExtractionOutputs,
  TextTextLanguageCodesOutputs,
  TextTextLanguageDetectionOutputs,
  TextTextLanguageGenerationOutputs,
  TextTextNamedEntityRecognitionOutputs,
  TextTextNextWordPredictionOutputs,
  TextTextProductOwnershipOutputs,
  TextTextProductSentimentOutputs,
  TextTextPunctuationRestorationOutputs,
  TextTextQuestionAnsweringOutputs,
  TextTextSentimentAnalysisOutputs,
  TextTextSimilarityOutputs,
  TextTextSpeakerRecognitionOutputs,
  TextTextTranslationOutputs,
  TextTextVatCountryGuessingOutputs,
  TextTextWebsiteClassificationOutputs,
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

  speakerDiarization(args: AudioTextSpeakerDiarizationInputs): Promise<AudioTextSpeakerDiarizationOutputs> {
    return this.fromAudio().toText().speakerDiarization(args);
  }

  abstract fromImage(): FromImage;

  // IMAGE => IMAGE

  backgroundRemoval(args: ImageImageBackgroundRemovalInputs & { asUrl: true }): Promise<ImageImageBackgroundRemovalOutputsOneSampleAsUrl>;
  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ArrayBuffer>;
  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs> {
    return this.fromImage().toImage().backgroundRemoval(args);
  }

  backgroundReplacement(args: ImageImageBackgroundReplacementInputs & { asUrl: true }): Promise<ImageImageBackgroundReplacementOutputsOneSampleAsUrl>;
  backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ArrayBuffer>;
  backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs> {
    return this.fromImage().toImage().backgroundReplacement(args);
  }

  colorization(args: ImageImageColorizationInputs & { asUrl: true }): Promise<ImageImageColorizationOutputsOneSampleAsUrl>;
  colorization(args: ImageImageColorizationInputs): Promise<ArrayBuffer>;
  colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs> {
    return this.fromImage().toImage().colorization(args);
  }

  deblurring(args: ImageImageDeblurringInputs & { asUrl: true }): Promise<ImageImageDeblurringOutputsOneSampleAsUrl>;
  deblurring(args: ImageImageDeblurringInputs): Promise<ArrayBuffer>;
  deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs> {
    return this.fromImage().toImage().deblurring(args);
  }

  uncolorization(args: ImageImageUncolorizationInputs & { asUrl: true }): Promise<ImageImageUncolorizationOutputsOneSampleAsUrl>;
  uncolorization(args: ImageImageUncolorizationInputs): Promise<ArrayBuffer>;
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

  imageGeneration(args: TextImageImageGenerationInputs & { samples: 1, asUrl: true }): Promise<TextImageImageGenerationOutputsOneSampleAsUrl>;
  imageGeneration(args: TextImageImageGenerationInputs & { asUrl: true }): Promise<TextImageImageGenerationOutputsMultipleSamplesAsUrl>;
  imageGeneration(args: TextImageImageGenerationInputs & { samples: 1 }): Promise<TextImageImageGenerationOutputsOneSample>;
  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputsMultipleSamples>;
  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputs> {
    return this.fromText().toImage().imageGeneration(args);
  }

  // TEXT => TEXT

  ageFromName(args: TextTextAgeFromNameInputs): Promise<TextTextAgeFromNameOutputs> {
    return this.fromText().toText().ageFromName(args);
  }

  anonymization(args: TextTextAnonymizationInputs): Promise<TextTextAnonymizationOutputs> {
    return this.fromText().toText().anonymization(args);
  }

  bulletPointGeneration(args: TextTextBulletPointGenerationInputs): Promise<TextTextBulletPointGenerationOutputs> {
    return this.fromText().toText().bulletPointGeneration(args);
  }

  commandGeneration(args: TextTextCommandGenerationInputs): Promise<TextTextCommandGenerationOutputs> {
    return this.fromText().toText().commandGeneration(args);
  }

  companyCategorization(args: TextTextCompanyCategorizationInputs): Promise<TextTextCompanyCategorizationOutputs> {
    return this.fromText().toText().companyCategorization(args);
  }

  companyNameNormalization(args: TextTextCompanyNameNormalizationInputs): Promise<TextTextCompanyNameNormalizationOutputs> {
    return this.fromText().toText().companyNameNormalization(args);
  }

  companyStockCode(args: TextTextCompanyStockCodeInputs): Promise<TextTextCompanyStockCodeOutputs> {
    return this.fromText().toText().companyStockCode(args);
  }

  countryFromName(args: TextTextCountryFromNameInputs): Promise<TextTextCountryFromNameOutputs> {
    return this.fromText().toText().countryFromName(args);
  }

  dateCleaning(args: TextTextDateCleaningInputs): Promise<TextTextDateCleaningOutputs> {
    return this.fromText().toText().dateCleaning(args);
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

  gpt3(args: TextTextGpt3Inputs): Promise<TextTextGpt3Outputs> {
    return this.fromText().toText().gpt3(args);
  }

  guessCity(args: TextTextGuessCityInputs): Promise<TextTextGuessCityOutputs> {
    return this.fromText().toText().guessCity(args);
  }

  guessCountry(args: TextTextGuessCountryInputs): Promise<TextTextGuessCountryOutputs> {
    return this.fromText().toText().guessCountry(args);
  }

  guessIntent(args: TextTextGuessIntentInputs): Promise<TextTextGuessIntentOutputs> {
    return this.fromText().toText().guessIntent(args);
  }

  hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs> {
    return this.fromText().toText().hateSpeechDetection(args);
  }

  headlineGeneration(args: TextTextHeadlineGenerationInputs): Promise<TextTextHeadlineGenerationOutputs> {
    return this.fromText().toText().headlineGeneration(args);
  }

  keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs> {
    return this.fromText().toText().keywordExtraction(args);
  }

  languageCodes(args: TextTextLanguageCodesInputs): Promise<TextTextLanguageCodesOutputs> {
    return this.fromText().toText().languageCodes(args);
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

  nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs> {
    return this.fromText().toText().nextWordPrediction(args);
  }

  productOwnership(args: TextTextProductOwnershipInputs): Promise<TextTextProductOwnershipOutputs> {
    return this.fromText().toText().productOwnership(args);
  }

  productSentiment(args: TextTextProductSentimentInputs): Promise<TextTextProductSentimentOutputs> {
    return this.fromText().toText().productSentiment(args);
  }

  punctuationRestoration(args: TextTextPunctuationRestorationInputs): Promise<TextTextPunctuationRestorationOutputs> {
    return this.fromText().toText().punctuationRestoration(args);
  }

  questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs> {
    return this.fromText().toText().questionAnswering(args);
  }

  sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs> {
    return this.fromText().toText().sentimentAnalysis(args);
  }

  similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs> {
    return this.fromText().toText().similarity(args);
  }

  speakerRecognition(args: TextTextSpeakerRecognitionInputs): Promise<TextTextSpeakerRecognitionOutputs> {
    return this.fromText().toText().speakerRecognition(args);
  }

  translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs> {
    return this.fromText().toText().translation(args);
  }

  vatCountryGuessing(args: TextTextVatCountryGuessingInputs): Promise<TextTextVatCountryGuessingOutputs> {
    return this.fromText().toText().vatCountryGuessing(args);
  }

  websiteClassification(args: TextTextWebsiteClassificationInputs): Promise<TextTextWebsiteClassificationOutputs> {
    return this.fromText().toText().websiteClassification(args);
  }

}

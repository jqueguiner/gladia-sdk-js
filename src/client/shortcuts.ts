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
  ImageImageColorizationInputs,
  ImageImageFaceBluringInputs,
  ImageImageUncolorizationInputs,
  ImageTextAsciifyInputs,
  ImageTextClassificationInputs,
  ImageTextOcrInputs,
  TextImageImageGenerationInputs,
  TextTextAutocorrectInputs,
  TextTextEmotionRecognitionInputs,
  TextTextHateSpeechDetectionInputs,
  TextTextKeywordExtractionInputs,
  TextTextLanguageDetectionInputs,
  TextTextLanguageGenerationInputs,
  TextTextNamedEntityRecognitionInputs,
  TextTextNextSentencePredictionInputs,
  TextTextNextWordPredictionInputs,
  TextTextPluralInputs,
  TextTextProgrammingLanguageGenerationInputs,
  TextTextQuestionAnsweringInputs,
  TextTextSentenceParaphraserInputs,
  TextTextSentimentAnalysisInputs,
  TextTextSimilarityInputs,
  TextTextTranslationInputs,
  TextTextWordAlignmentInputs,
  TextTextArticleGenerationInputs,
  TextTextAdGenerationInputs,
  TextTextSummarizationInputs,
  TextTextIntentClassificationInputs,
} from './input-models'

export abstract class Shortcuts implements
  Omit<FromAudioToText, 'httpClient'>,
  Omit<FromImageToImage, 'httpClient'>,
  Omit<FromImageToText, 'httpClient'>,
  Omit<FromTextToImage, 'httpClient'>,
  Omit<FromTextToText, 'httpClient'>
{

  abstract fromAudio(): FromAudio;

  // AUDIO => TEXT

  audioTranscription(args: AudioTextAudioTranscriptionInputs) {
    return this.fromAudio().toText().audioTranscription(args);
  }

  abstract fromImage(): FromImage;

  // IMAGE => IMAGE

  backgroundRemoval(args: ImageImageBackgroundRemovalInputs) {
    return this.fromImage().toImage().backgroundRemoval(args);
  }

  colorization(args: ImageImageColorizationInputs) {
    return this.fromImage().toImage().colorization(args);
  }

  faceBluring(args: ImageImageFaceBluringInputs) {
    return this.fromImage().toImage().faceBluring(args);
  }

  uncolorization(args: ImageImageUncolorizationInputs) {
    return this.fromImage().toImage().uncolorization(args);
  }

  // IMAGE => TEXT

  asciify(args: ImageTextAsciifyInputs) {
    return this.fromImage().toText().asciify(args);
  }

  classification(args: ImageTextClassificationInputs) {
    return this.fromImage().toText().classification(args);
  }

  ocr(args: ImageTextOcrInputs) {
    return this.fromImage().toText().ocr(args);
  }

  abstract fromText(): FromText;

  // TEXT => IMAGE

  imageGeneration(args: TextImageImageGenerationInputs) {
    return this.fromText().toImage().imageGeneration(args);
  }

  // TEXT => TEXT

  autocorrect(args: TextTextAutocorrectInputs) {
    return this.fromText().toText().autocorrect(args);
  }

  emotionRecognition(args: TextTextEmotionRecognitionInputs) {
    return this.fromText().toText().emotionRecognition(args);
  }

  hateSpeechDetection(args: TextTextHateSpeechDetectionInputs) {
    return this.fromText().toText().hateSpeechDetection(args);
  }

  keywordExtraction(args: TextTextKeywordExtractionInputs) {
    return this.fromText().toText().keywordExtraction(args);
  }

  languageDetection(args: TextTextLanguageDetectionInputs) {
    return this.fromText().toText().languageDetection(args);
  }

  languageGeneration(args: TextTextLanguageGenerationInputs) {
    return this.fromText().toText().languageGeneration(args);
  }

  namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs) {
    return this.fromText().toText().namedEntityRecognition(args);
  }

  nextSentencePrediction(args: TextTextNextSentencePredictionInputs) {
    return this.fromText().toText().nextSentencePrediction(args);
  }

  nextWordPrediction(args: TextTextNextWordPredictionInputs) {
    return this.fromText().toText().nextWordPrediction(args);
  }

  plural(args: TextTextPluralInputs) {
    return this.fromText().toText().plural(args);
  }

  programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs) {
    return this.fromText().toText().programmingLanguageGeneration(args);
  }

  questionAnswering(args: TextTextQuestionAnsweringInputs) {
    return this.fromText().toText().questionAnswering(args);
  }

  sentenceParaphraser(args: TextTextSentenceParaphraserInputs) {
    return this.fromText().toText().sentenceParaphraser(args);
  }

  sentimentAnalysis(args: TextTextSentimentAnalysisInputs) {
    return this.fromText().toText().sentimentAnalysis(args);
  }

  similarity(args: TextTextSimilarityInputs) {
    return this.fromText().toText().similarity(args);
  }

  translation(args: TextTextTranslationInputs) {
    return this.fromText().toText().translation(args);
  }

  wordAlignment(args: TextTextWordAlignmentInputs) {
    return this.fromText().toText().wordAlignment(args);
  }

  articleGeneration(args: TextTextArticleGenerationInputs) {
    return this.fromText().toText().articleGeneration(args);
  }

  adGeneration(args: TextTextAdGenerationInputs) {
    return this.fromText().toText().adGeneration(args);
  }

  summarization(args: TextTextSummarizationInputs) {
    return this.fromText().toText().summarization(args);
  }

  intentClassification(args: TextTextIntentClassificationInputs) {
    return this.fromText().toText().intentClassification(args);
  }

}

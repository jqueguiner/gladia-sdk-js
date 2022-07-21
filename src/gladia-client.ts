import { FromImage } from './from-image';
import { FromImageToImage } from './from-image-to-image';
import { FromImageToText } from './from-image-to-text';
import { FromText } from './from-text';
import { FromTextToText } from './from-text-to-text';
import { HttpClientFactory } from './http-client';
import {
  ImageImageBackgroundRemovalModel,
  ImageImageColorizationModel,
  ImageImageFaceBluringModel,
  ImageImageUncolorizationModel,
  ImageTextAsciifyModel,
  ImageTextClassificationModel,
  ImageTextOcrModel,
  TextTextAutocorrectModel,
  TextTextEmotionRecognitionModel,
  TextTextEntityExtractionModel,
  TextTextHateSpeechDetectionModel,
  TextTextKeywordExtractionModel,
  TextTextLanguageDetectionModel,
  TextTextLanguageGenerationModel,
  TextTextNamedEntityRecognitionModel,
  TextTextNextSentencePredictionModel,
  TextTextNextWordPredictionModel,
  TextTextPluralModel,
  TextTextProgrammingLanguageGenerationModel,
  TextTextQuestionAnsweringModel,
  TextTextSentenceParaphraserModel,
  TextTextSentimentAnalysisModel,
  TextTextSimilarityModel,
  TextTextWordAlignmentModel,
} from './models';
import { WithImage, WithModel, WithText } from './types';

export interface GladiaClientParams {
  apiKey: string;
  customHttpClient?: HttpClientFactory;
}

export class GladiaClient
  implements
    Omit<FromImageToImage, 'httpClient'>,
    Omit<FromImageToText, 'httpClient'>,
    Omit<FromTextToText, 'httpClient'>
{
  private fromImageInst: FromImage;
  private FromTextInst: FromText;

  constructor(private params: GladiaClientParams) {
    this.fromImageInst = new FromImage(this.params);
    this.FromTextInst = new FromText(this.params);
  }

  fromImage() {
    return this.fromImageInst;
  }

  fromText() {
    return this.FromTextInst;
  }

  // shortcuts

  // IMAGE => IMAGE

  backgroundRemoval(
    args: WithImage & WithModel<ImageImageBackgroundRemovalModel>,
  ): Promise<ArrayBuffer> {
    return this.fromImage().toImage().backgroundRemoval(args);
  }

  colorization(args: WithImage & WithModel<ImageImageColorizationModel>): Promise<ArrayBuffer> {
    return this.fromImage().toImage().colorization(args);
  }

  faceBluring(args: WithImage & WithModel<ImageImageFaceBluringModel>): Promise<ArrayBuffer> {
    return this.fromImage().toImage().faceBluring(args);
  }

  uncolorization(args: WithImage & WithModel<ImageImageUncolorizationModel>): Promise<ArrayBuffer> {
    return this.fromImage().toImage().uncolorization(args);
  }

  // IMAGE => TEXT

  asciify(args: WithImage & WithModel<ImageTextAsciifyModel>): Promise<string> {
    return this.fromImage().toText().asciify(args);
  }

  classification(args: WithImage & WithModel<ImageTextClassificationModel>): Promise<string> {
    return this.fromImage().toText().classification(args);
  }

  ocr(args: WithImage & WithModel<ImageTextOcrModel>): Promise<string> {
    return this.fromImage().toText().ocr(args);
  }

  // TEXT => TEXT

  autocorrect(args: WithText & WithModel<TextTextAutocorrectModel>): Promise<string> {
    return this.fromText().toText().autocorrect(args);
  }

  emotionRecognition(args: WithText & WithModel<TextTextEmotionRecognitionModel>): Promise<string> {
    return this.fromText().toText().emotionRecognition(args);
  }

  entityExtraction(args: WithText & WithModel<TextTextEntityExtractionModel>): Promise<string> {
    return this.fromText().toText().entityExtraction(args);
  }

  hateSpeechDetection(
    args: WithText & WithModel<TextTextHateSpeechDetectionModel>,
  ): Promise<string> {
    return this.fromText().toText().hateSpeechDetection(args);
  }

  keywordExtraction(args: WithText & WithModel<TextTextKeywordExtractionModel>): Promise<string> {
    return this.fromText().toText().keywordExtraction(args);
  }

  languageDetection(args: WithText & WithModel<TextTextLanguageDetectionModel>): Promise<string> {
    return this.fromText().toText().languageDetection(args);
  }

  languageGeneration(args: WithText & WithModel<TextTextLanguageGenerationModel>): Promise<string> {
    return this.fromText().toText().languageGeneration(args);
  }

  namedEntityRecognition(
    args: WithText & WithModel<TextTextNamedEntityRecognitionModel>,
  ): Promise<string> {
    return this.fromText().toText().namedEntityRecognition(args);
  }

  nextSentencePrediction(
    args: WithText & WithModel<TextTextNextSentencePredictionModel>,
  ): Promise<string> {
    return this.fromText().toText().nextSentencePrediction(args);
  }

  nextWordPrediction(args: WithText & WithModel<TextTextNextWordPredictionModel>): Promise<string> {
    return this.fromText().toText().nextWordPrediction(args);
  }

  plural(args: WithText & WithModel<TextTextPluralModel>): Promise<string> {
    return this.fromText().toText().plural(args);
  }

  programmingLanguageGeneration(
    args: WithText & WithModel<TextTextProgrammingLanguageGenerationModel>,
  ): Promise<string> {
    return this.fromText().toText().programmingLanguageGeneration(args);
  }

  questionAnswering(args: WithText & WithModel<TextTextQuestionAnsweringModel>): Promise<string> {
    return this.fromText().toText().questionAnswering(args);
  }

  sentenceParaphraser(
    args: WithText & WithModel<TextTextSentenceParaphraserModel>,
  ): Promise<string> {
    return this.fromText().toText().sentenceParaphraser(args);
  }

  sentimentAnalysis(args: WithText & WithModel<TextTextSentimentAnalysisModel>): Promise<string> {
    return this.fromText().toText().sentimentAnalysis(args);
  }

  similarity(args: WithText & WithModel<TextTextSimilarityModel>): Promise<string> {
    return this.fromText().toText().similarity(args);
  }

  wordAlignment(args: WithText & WithModel<TextTextWordAlignmentModel>): Promise<string> {
    return this.fromText().toText().wordAlignment(args);
  }
}

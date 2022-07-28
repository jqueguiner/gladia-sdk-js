/* Generated file with "scripts/generate-sdk.ts" */

import {
  ImageTextAsciifyInputs,
  ImageTextClassificationInputs,
  ImageTextOcrInputs,
} from './input-models'
import {
  ImageTextAsciifyOutputs,
  ImageTextClassificationOutputs,
  ImageTextOcrOutputs,
} from './output-models'
import {
  IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL,
  IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL,
  IMAGE_TEXT_OCR_DEFAULT_MODEL,
} from '../models'
import { getHttpClient, HttpClient } from '../internal/http-client';
import { GladiaClientParams } from './gladia-client-params';

export class FromImageToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  asciify(args: ImageTextAsciifyInputs): Promise<ImageTextAsciifyOutputs> {
    const formData = new FormData();
    formData.append('image', args.image);
    formData.append('image_url', args.image_url);
    return this.httpClient.post({
      url: '/image/text/asciify/',
      query: { model: args.model ?? IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    });
  }

  classification(args: ImageTextClassificationInputs): Promise<ImageTextClassificationOutputs> {
    const formData = new FormData();
    formData.append('image', args.image);
    formData.append('image_url', args.image_url);
    return this.httpClient.post({
      url: '/image/text/classification/',
      query: { model: args.model ?? IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    });
  }

  ocr(args: ImageTextOcrInputs): Promise<ImageTextOcrOutputs> {
    const formData = new FormData();
    formData.append('image', args.image);
    formData.append('image_url', args.image_url);
    return this.httpClient.post({
      url: '/image/text/ocr/',
      query: { model: args.model ?? IMAGE_TEXT_OCR_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    });
  }

}

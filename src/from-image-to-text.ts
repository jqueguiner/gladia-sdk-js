import { GladiaClientParams } from './gladia-client';
import { getHttpClient, HttpClient } from './http-client';
import {
  ImageTextAsciifyModel,
  ImageTextClassificationModel,
  ImageTextOcrModel,
  IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL,
  IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL,
  IMAGE_TEXT_OCR_DEFAULT_MODEL,
} from './models';
import { WithImage, WithModel } from './types';

export class FromImageToText {
  private httpClient: HttpClient;
  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  asciify(args: WithImage & WithModel<ImageTextAsciifyModel>): Promise<string> {
    const formData = new FormData();
    formData.append('image', args.image);
    return this.httpClient.post({
      url: '/image/text/asciify/',
      query: { model: args.model ?? IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    });
  }

  classification(args: WithImage & WithModel<ImageTextClassificationModel>): Promise<string> {
    const formData = new FormData();
    formData.append('image', args.image);
    return this.httpClient.post({
      url: '/image/text/classification/',
      query: { model: args.model ?? IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    });
  }

  ocr(args: WithImage & WithModel<ImageTextOcrModel>): Promise<string> {
    const formData = new FormData();
    formData.append('image', args.image);
    return this.httpClient.post({
      url: '/image/text/ocr/',
      query: { model: args.model ?? IMAGE_TEXT_OCR_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    });
  }
}

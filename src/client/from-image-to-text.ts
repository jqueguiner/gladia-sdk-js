/* Generated file with "scripts/generate-sdk.ts" */

import {
  ImageTextAsciifyInputs,
  ImageTextClassificationInputs,
  ImageTextOcrInputs,
} from './input-models';
import {
  ImageTextAsciifyOutputs,
  ImageTextClassificationOutputs,
  ImageTextOcrOutputs,
} from './output-models';
import {
  IMAGE_TEXT_ASCIIFY_CONTENT_TYPE,
  IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE,
  IMAGE_TEXT_OCR_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { GladiaClientParams } from './gladia-client-params';

export class FromImageToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  asciify(args: ImageTextAsciifyInputs): Promise<ImageTextAsciifyOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/text/asciify/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_TEXT_ASCIIFY_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData,
    });
  }

  classification(args: ImageTextClassificationInputs): Promise<ImageTextClassificationOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    if (isDefined(args.top_k)) {
      formData.append('top_k', String(args.top_k));
    }
    return this.httpClient.post({
      url: '/image/text/classification/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData,
    });
  }

  ocr(args: ImageTextOcrInputs): Promise<ImageTextOcrOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    if (isDefined(args.source_language)) {
      formData.append('source_language', args.source_language);
    }
    return this.httpClient.post({
      url: '/image/text/ocr/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_TEXT_OCR_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData,
    });
  }

}

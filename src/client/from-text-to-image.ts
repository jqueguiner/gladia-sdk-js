/* Generated file with "scripts/generate-sdk.ts" */

import { getHttpClient, HttpClient } from '../internal/http-client';
import { UrlFormData } from '../internal/url-form-data';
import {
  TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE,
  TEXT_IMAGE_IMAGE_GENERATION_DEFAULT_MODEL
} from '../models';
import { GladiaClientParams } from './gladia-client-params';
import {
  TextImageImageGenerationInputs
} from './input-models';
import {
  TextImageImageGenerationOutputs
} from './output-models';

export class FromTextToImage {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputs> {
    const formData = new UrlFormData();
    formData.append('prompt', args.prompt);
    formData.append('samples', String(args.samples));
    formData.append('steps', String(args.steps));
    formData.append('seed', String(args.seed));
    formData.append('scale', String(args.scale));
    return this.httpClient.post({
      url: '/text/image/image-generation/',
      headers: { 'Content-Type': TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_IMAGE_IMAGE_GENERATION_DEFAULT_MODEL,
      },
      responseType: 'arraybuffer',
      body: formData.toString(),
    });
  }

}

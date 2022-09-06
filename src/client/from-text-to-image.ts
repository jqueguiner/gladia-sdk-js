/* Generated file with "scripts/generate-sdk.ts" */

import {
  TextImageImageGenerationInputs,
} from './input-models';
import {
  TextImageImageGenerationOutputs,
} from './output-models';
import {
  TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { UrlFormData } from '../internal/url-form-data';
import { GladiaClientParams } from './gladia-client-params';

export class FromTextToImage {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputs> {
    const formData = new UrlFormData();
    formData.append('prompt', args.prompt);
    if (isDefined(args.samples)) {
      formData.append('samples', String(args.samples));
    }
    if (isDefined(args.steps)) {
      formData.append('steps', String(args.steps));
    }
    if (isDefined(args.seed)) {
      formData.append('seed', String(args.seed));
    }
    return this.httpClient.post({
      url: '/text/image/image-generation/',
      headers: {
        'Content-Type': TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData.toString(),
    });
  }

}

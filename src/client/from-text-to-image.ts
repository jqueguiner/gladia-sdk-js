/* Generated file with "scripts/generate-sdk.ts" */

import {
  TextImageImageGenerationInputs,
} from './input-models'
import {
  TextImageImageGenerationOutputs,
} from './output-models'
import {
  TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE,
  TEXT_IMAGE_IMAGE_GENERATION_DEFAULT_MODEL,
} from '../models'
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
    if (isDefined(args.prompt)) {
      formData.append('prompt', args.prompt);
    }
    if (isDefined(args.samples)) {
      formData.append('samples', String(args.samples));
    }
    if (isDefined(args.steps)) {
      formData.append('steps', String(args.steps));
    }
    if (isDefined(args.seed)) {
      formData.append('seed', String(args.seed));
    }
    if (isDefined(args.scale)) {
      formData.append('scale', String(args.scale));
    }
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

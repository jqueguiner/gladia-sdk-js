/* Generated file with "scripts/generate-sdk.ts" */

import {
  TextImageImageGenerationInputs,
} from './input-models';
import {
  TextImageImageGenerationOutputs,
  TextImageImageGenerationOutputsMultipleSamples,
  TextImageImageGenerationOutputsOneSample,
  TextImageImageGenerationOutputsMultipleSamplesAsUrl,
  TextImageImageGenerationOutputsOneSampleAsUrl,
} from './output-models';
import {
  TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient, UrlFormData } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { GladiaClientParams } from './gladia-client-params';

export class FromTextToImage {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  imageGeneration(args: TextImageImageGenerationInputs & { samples: 1, asUrl: true }): Promise<TextImageImageGenerationOutputsOneSampleAsUrl>;
  imageGeneration(args: TextImageImageGenerationInputs & { asUrl: true }): Promise<TextImageImageGenerationOutputsMultipleSamplesAsUrl>;
  imageGeneration(args: TextImageImageGenerationInputs & { samples: 1 }): Promise<TextImageImageGenerationOutputsOneSample>;
  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputsMultipleSamples>;
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
        ...(args.asUrl ? { 'Accept': 'text/uri-list'} : {}),
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: args.samples > 1 || args.asUrl ? 'json' : 'arraybuffer',
      body: formData.toString(),
    });
  }

}

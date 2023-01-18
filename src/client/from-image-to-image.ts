/* Generated file with "scripts/generate-sdk.ts" */

import {
  ImageImageBackgroundRemovalInputs,
  ImageImageBackgroundReplacementInputs,
  ImageImageColorizationInputs,
  ImageImageDeblurringInputs,
  ImageImageUncolorizationInputs,
} from './input-models';
import {
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
} from './output-models';
import {
  IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE,
  IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE,
  IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE,
  IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE,
  IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { GladiaClientParams } from './gladia-client-params';

export class FromImageToImage {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  backgroundRemoval(args: ImageImageBackgroundRemovalInputs & { asUrl: true }): Promise<ImageImageBackgroundRemovalOutputsOneSampleAsUrl>;
  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ArrayBuffer>;
  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/background-removal/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE : undefined,
        ...(args.asUrl ? { 'Accept': 'text/uri-list'} : {}),
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: args.asUrl ? 'json' : 'arraybuffer',
      body: formData,
    });
  }

  backgroundReplacement(args: ImageImageBackgroundReplacementInputs & { asUrl: true }): Promise<ImageImageBackgroundReplacementOutputsOneSampleAsUrl>;
  backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ArrayBuffer>;
  backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs> {
    const formData = new FormData();
    if (isDefined(args.original_image)) {
      formData.append('original_image', args.original_image);
    }
    if (isDefined(args.original_image_url)) {
      formData.append('original_image_url', args.original_image_url);
    }
    if (isDefined(args.background_image)) {
      formData.append('background_image', args.background_image);
    }
    if (isDefined(args.background_image_url)) {
      formData.append('background_image_url', args.background_image_url);
    }
    formData.append('alignment', args.alignment);
    return this.httpClient.post({
      url: '/image/image/background-replacement/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE : undefined,
        ...(args.asUrl ? { 'Accept': 'text/uri-list'} : {}),
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: args.asUrl ? 'json' : 'arraybuffer',
      body: formData,
    });
  }

  colorization(args: ImageImageColorizationInputs & { asUrl: true }): Promise<ImageImageColorizationOutputsOneSampleAsUrl>;
  colorization(args: ImageImageColorizationInputs): Promise<ArrayBuffer>;
  colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/colorization/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE : undefined,
        ...(args.asUrl ? { 'Accept': 'text/uri-list'} : {}),
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: args.asUrl ? 'json' : 'arraybuffer',
      body: formData,
    });
  }

  deblurring(args: ImageImageDeblurringInputs & { asUrl: true }): Promise<ImageImageDeblurringOutputsOneSampleAsUrl>;
  deblurring(args: ImageImageDeblurringInputs): Promise<ArrayBuffer>;
  deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/deblurring/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE : undefined,
        ...(args.asUrl ? { 'Accept': 'text/uri-list'} : {}),
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: args.asUrl ? 'json' : 'arraybuffer',
      body: formData,
    });
  }

  uncolorization(args: ImageImageUncolorizationInputs & { asUrl: true }): Promise<ImageImageUncolorizationOutputsOneSampleAsUrl>;
  uncolorization(args: ImageImageUncolorizationInputs): Promise<ArrayBuffer>;
  uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/uncolorization/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE : undefined,
        ...(args.asUrl ? { 'Accept': 'text/uri-list'} : {}),
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: args.asUrl ? 'json' : 'arraybuffer',
      body: formData,
    });
  }

}

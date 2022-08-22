/* Generated file with "scripts/generate-sdk.ts" */

import {
  ImageImageBackgroundRemovalInputs,
  ImageImageColorizationInputs,
  ImageImageFaceBluringInputs,
  ImageImageUncolorizationInputs,
} from './input-models'
import {
  ImageImageBackgroundRemovalOutputs,
  ImageImageColorizationOutputs,
  ImageImageFaceBluringOutputs,
  ImageImageUncolorizationOutputs,
} from './output-models'
import {
  IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE,
  IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
  IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE,
  IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
  IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE,
  IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
  IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE,
  IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
} from '../models'
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { GladiaClientParams } from './gladia-client-params';

export class FromImageToImage {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

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
      },
      query: {
        model: args.model ?? IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

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
      },
      query: {
        model: args.model ?? IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/face-bluring/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE : undefined,
      },
      query: {
        model: args.model ?? IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

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
      },
      query: {
        model: args.model ?? IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

}

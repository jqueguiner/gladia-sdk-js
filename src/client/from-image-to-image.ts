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
  IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
  IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
  IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
  IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
} from '../models'
import { getHttpClient, HttpClient } from '../internal/http-client';
import { GladiaClientParams } from './gladia-client-params';

export class FromImageToImage {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs> {
    const formData = new FormData();
    formData.append('image', args.image);
    formData.append('image_url', args.image_url);
    return this.httpClient.post({
      url: '/image/image/background-removal/',
      query: {
        model: args.model ?? IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs> {
    const formData = new FormData();
    formData.append('image', args.image);
    formData.append('image_url', args.image_url);
    return this.httpClient.post({
      url: '/image/image/colorization/',
      query: {
        model: args.model ?? IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs> {
    const formData = new FormData();
    formData.append('image', args.image);
    formData.append('image_url', args.image_url);
    return this.httpClient.post({
      url: '/image/image/face-bluring/',
      query: {
        model: args.model ?? IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

  uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs> {
    const formData = new FormData();
    formData.append('image', args.image);
    formData.append('image_url', args.image_url);
    return this.httpClient.post({
      url: '/image/image/uncolorization/',
      query: {
        model: args.model ?? IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

}

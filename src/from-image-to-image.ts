import { GladiaClientParams } from './gladia-client';
import { getHttpClient, HttpClient } from './http-client';
import {
  ImageImageBackgroundRemovalModel,
  ImageImageColorizationModel,
  ImageImageFaceBluringModel,
  ImageImageUncolorizationModel,
  IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
  IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
  IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
  IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
} from './models';
import { WithImage, WithModel } from './types';

export class FromImageToImage {
  private httpClient: HttpClient;
  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  backgroundRemoval(
    args: WithImage & WithModel<ImageImageBackgroundRemovalModel>,
  ): Promise<ArrayBuffer> {
    const formData = new FormData();
    formData.append('image', args.image);
    return this.httpClient.post({
      url: '/image/image/background-removal/',
      query: {
        model: args.model ?? IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
      },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
      responseType: 'arraybuffer',
    });
  }

  colorization(args: WithImage & WithModel<ImageImageColorizationModel>): Promise<ArrayBuffer> {
    const formData = new FormData();
    formData.append('image', args.image);
    return this.httpClient.post({
      url: '/image/image/colorization/',
      query: { model: args.model ?? IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
      responseType: 'arraybuffer',
    });
  }

  faceBluring(args: WithImage & WithModel<ImageImageFaceBluringModel>): Promise<ArrayBuffer> {
    const formData = new FormData();
    formData.append('image', args.image);
    return this.httpClient.post({
      url: '/image/image/face-bluring/',
      query: { model: args.model ?? IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
      responseType: 'arraybuffer',
    });
  }

  uncolorization(args: WithImage & WithModel<ImageImageUncolorizationModel>): Promise<ArrayBuffer> {
    const formData = new FormData();
    formData.append('image', args.image);
    return this.httpClient.post({
      url: '/image/image/uncolorization/',
      query: { model: args.model ?? IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
      responseType: 'arraybuffer',
    });
  }
}

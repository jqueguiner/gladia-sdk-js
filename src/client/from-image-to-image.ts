/* Generated file with "scripts/generate-sdk.ts" */

import {
  ImageImageBackgroundRemovalInputs,
  ImageImageBackgroundReplacementInputs,
  ImageImageColorizationInputs,
  ImageImageDeblurringInputs,
  ImageImageEnhancementInputs,
  ImageImageFaceBluringInputs,
  ImageImageGuidedInpaintingInputs,
  ImageImageImageGuidedInpaintingInputs,
  ImageImageInpaintingInputs,
  ImageImageUncolorizationInputs,
} from './input-models';
import {
  ImageImageBackgroundRemovalOutputs,
  ImageImageBackgroundRemovalOutputsMultipleSamplesAsUrl,
  ImageImageBackgroundRemovalOutputsOneSampleAsUrl,
  ImageImageBackgroundReplacementOutputs,
  ImageImageBackgroundReplacementOutputsMultipleSamplesAsUrl,
  ImageImageBackgroundReplacementOutputsOneSampleAsUrl,
  ImageImageColorizationOutputs,
  ImageImageColorizationOutputsMultipleSamplesAsUrl,
  ImageImageColorizationOutputsOneSampleAsUrl,
  ImageImageDeblurringOutputs,
  ImageImageDeblurringOutputsMultipleSamplesAsUrl,
  ImageImageDeblurringOutputsOneSampleAsUrl,
  ImageImageEnhancementOutputs,
  ImageImageEnhancementOutputsMultipleSamplesAsUrl,
  ImageImageEnhancementOutputsOneSampleAsUrl,
  ImageImageFaceBluringOutputs,
  ImageImageFaceBluringOutputsMultipleSamplesAsUrl,
  ImageImageFaceBluringOutputsOneSampleAsUrl,
  ImageImageGuidedInpaintingOutputs,
  ImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl,
  ImageImageGuidedInpaintingOutputsOneSampleAsUrl,
  ImageImageImageGuidedInpaintingOutputs,
  ImageImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl,
  ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl,
  ImageImageInpaintingOutputs,
  ImageImageInpaintingOutputsMultipleSamplesAsUrl,
  ImageImageInpaintingOutputsOneSampleAsUrl,
  ImageImageUncolorizationOutputs,
  ImageImageUncolorizationOutputsMultipleSamplesAsUrl,
  ImageImageUncolorizationOutputsOneSampleAsUrl,
} from './output-models';
import {
  IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE,
  IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE,
  IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE,
  IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE,
  IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE,
  IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE,
  IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE,
  IMAGE_IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE,
  IMAGE_IMAGE_INPAINTING_CONTENT_TYPE,
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

  backgroundRemoval(args: ImageImageBackgroundRemovalInputs & { samples: 1, asUrl: true }): Promise<ImageImageBackgroundRemovalOutputsOneSampleAsUrl>;
  backgroundRemoval(args: ImageImageBackgroundRemovalInputs & { asUrl: true }): Promise<ImageImageBackgroundRemovalOutputsMultipleSamplesAsUrl>;
  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs>;
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

  backgroundReplacement(args: ImageImageBackgroundReplacementInputs & { samples: 1, asUrl: true }): Promise<ImageImageBackgroundReplacementOutputsOneSampleAsUrl>;
  backgroundReplacement(args: ImageImageBackgroundReplacementInputs & { asUrl: true }): Promise<ImageImageBackgroundReplacementOutputsMultipleSamplesAsUrl>;
  backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs>;
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

  colorization(args: ImageImageColorizationInputs & { samples: 1, asUrl: true }): Promise<ImageImageColorizationOutputsOneSampleAsUrl>;
  colorization(args: ImageImageColorizationInputs & { asUrl: true }): Promise<ImageImageColorizationOutputsMultipleSamplesAsUrl>;
  colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs>;
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

  deblurring(args: ImageImageDeblurringInputs & { samples: 1, asUrl: true }): Promise<ImageImageDeblurringOutputsOneSampleAsUrl>;
  deblurring(args: ImageImageDeblurringInputs & { asUrl: true }): Promise<ImageImageDeblurringOutputsMultipleSamplesAsUrl>;
  deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs>;
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

  enhancement(args: ImageImageEnhancementInputs & { samples: 1, asUrl: true }): Promise<ImageImageEnhancementOutputsOneSampleAsUrl>;
  enhancement(args: ImageImageEnhancementInputs & { asUrl: true }): Promise<ImageImageEnhancementOutputsMultipleSamplesAsUrl>;
  enhancement(args: ImageImageEnhancementInputs): Promise<ImageImageEnhancementOutputs>;
  enhancement(args: ImageImageEnhancementInputs): Promise<ImageImageEnhancementOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/enhancement/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE : undefined,
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

  faceBluring(args: ImageImageFaceBluringInputs & { samples: 1, asUrl: true }): Promise<ImageImageFaceBluringOutputsOneSampleAsUrl>;
  faceBluring(args: ImageImageFaceBluringInputs & { asUrl: true }): Promise<ImageImageFaceBluringOutputsMultipleSamplesAsUrl>;
  faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs>;
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

  guidedInpainting(args: ImageImageGuidedInpaintingInputs & { samples: 1, asUrl: true }): Promise<ImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
  guidedInpainting(args: ImageImageGuidedInpaintingInputs & { asUrl: true }): Promise<ImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl>;
  guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs>;
  guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs> {
    const formData = new FormData();
    if (isDefined(args.original_image)) {
      formData.append('original_image', args.original_image);
    }
    if (isDefined(args.original_image_url)) {
      formData.append('original_image_url', args.original_image_url);
    }
    if (isDefined(args.mask_image)) {
      formData.append('mask_image', args.mask_image);
    }
    if (isDefined(args.mask_image_url)) {
      formData.append('mask_image_url', args.mask_image_url);
    }
    formData.append('prompt', args.prompt);
    return this.httpClient.post({
      url: '/image/image/guided-inpainting/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE : undefined,
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

  imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs & { samples: 1, asUrl: true }): Promise<ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
  imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs & { asUrl: true }): Promise<ImageImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl>;
  imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs): Promise<ImageImageImageGuidedInpaintingOutputs>;
  imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs): Promise<ImageImageImageGuidedInpaintingOutputs> {
    const formData = new FormData();
    if (isDefined(args.original_image)) {
      formData.append('original_image', args.original_image);
    }
    if (isDefined(args.original_image_url)) {
      formData.append('original_image_url', args.original_image_url);
    }
    if (isDefined(args.example_image)) {
      formData.append('example_image', args.example_image);
    }
    if (isDefined(args.example_image_url)) {
      formData.append('example_image_url', args.example_image_url);
    }
    if (isDefined(args.mask_image)) {
      formData.append('mask_image', args.mask_image);
    }
    if (isDefined(args.mask_image_url)) {
      formData.append('mask_image_url', args.mask_image_url);
    }
    formData.append('seed', String(args.seed));
    formData.append('steps', String(args.steps));
    formData.append('guidance_scale', String(args.guidance_scale));
    return this.httpClient.post({
      url: '/image/image/image-guided-inpainting/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE : undefined,
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

  inpainting(args: ImageImageInpaintingInputs & { samples: 1, asUrl: true }): Promise<ImageImageInpaintingOutputsOneSampleAsUrl>;
  inpainting(args: ImageImageInpaintingInputs & { asUrl: true }): Promise<ImageImageInpaintingOutputsMultipleSamplesAsUrl>;
  inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs>;
  inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs> {
    const formData = new FormData();
    if (isDefined(args.original_image)) {
      formData.append('original_image', args.original_image);
    }
    if (isDefined(args.original_image_url)) {
      formData.append('original_image_url', args.original_image_url);
    }
    if (isDefined(args.mask_image)) {
      formData.append('mask_image', args.mask_image);
    }
    if (isDefined(args.mask_image_url)) {
      formData.append('mask_image_url', args.mask_image_url);
    }
    return this.httpClient.post({
      url: '/image/image/inpainting/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_INPAINTING_CONTENT_TYPE : undefined,
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

  uncolorization(args: ImageImageUncolorizationInputs & { samples: 1, asUrl: true }): Promise<ImageImageUncolorizationOutputsOneSampleAsUrl>;
  uncolorization(args: ImageImageUncolorizationInputs & { asUrl: true }): Promise<ImageImageUncolorizationOutputsMultipleSamplesAsUrl>;
  uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs>;
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

import { ImageImageBackgroundRemovalInputs, ImageImageBackgroundReplacementInputs, ImageImageColorizationInputs, ImageImageDeblurringInputs, ImageImageEnhancementInputs, ImageImageFaceBluringInputs, ImageImageGuidedInpaintingInputs, ImageImageImageGuidedInpaintingInputs, ImageImageInpaintingInputs, ImageImageUncolorizationInputs } from './input-models';
import { ImageImageBackgroundRemovalOutputs, ImageImageBackgroundRemovalOutputsMultipleSamplesAsUrl, ImageImageBackgroundRemovalOutputsOneSampleAsUrl, ImageImageBackgroundReplacementOutputs, ImageImageBackgroundReplacementOutputsMultipleSamplesAsUrl, ImageImageBackgroundReplacementOutputsOneSampleAsUrl, ImageImageColorizationOutputs, ImageImageColorizationOutputsMultipleSamplesAsUrl, ImageImageColorizationOutputsOneSampleAsUrl, ImageImageDeblurringOutputs, ImageImageDeblurringOutputsMultipleSamplesAsUrl, ImageImageDeblurringOutputsOneSampleAsUrl, ImageImageEnhancementOutputs, ImageImageEnhancementOutputsMultipleSamplesAsUrl, ImageImageEnhancementOutputsOneSampleAsUrl, ImageImageFaceBluringOutputs, ImageImageFaceBluringOutputsMultipleSamplesAsUrl, ImageImageFaceBluringOutputsOneSampleAsUrl, ImageImageGuidedInpaintingOutputs, ImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl, ImageImageGuidedInpaintingOutputsOneSampleAsUrl, ImageImageImageGuidedInpaintingOutputs, ImageImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl, ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl, ImageImageInpaintingOutputs, ImageImageInpaintingOutputsMultipleSamplesAsUrl, ImageImageInpaintingOutputsOneSampleAsUrl, ImageImageUncolorizationOutputs, ImageImageUncolorizationOutputsMultipleSamplesAsUrl, ImageImageUncolorizationOutputsOneSampleAsUrl } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromImageToImage {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageBackgroundRemovalOutputsOneSampleAsUrl>;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundRemovalOutputsMultipleSamplesAsUrl>;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageBackgroundReplacementOutputsOneSampleAsUrl>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundReplacementOutputsMultipleSamplesAsUrl>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs>;
    colorization(args: ImageImageColorizationInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageColorizationOutputsOneSampleAsUrl>;
    colorization(args: ImageImageColorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageColorizationOutputsMultipleSamplesAsUrl>;
    colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs>;
    deblurring(args: ImageImageDeblurringInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageDeblurringOutputsOneSampleAsUrl>;
    deblurring(args: ImageImageDeblurringInputs & {
        asUrl: true;
    }): Promise<ImageImageDeblurringOutputsMultipleSamplesAsUrl>;
    deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs>;
    enhancement(args: ImageImageEnhancementInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageEnhancementOutputsOneSampleAsUrl>;
    enhancement(args: ImageImageEnhancementInputs & {
        asUrl: true;
    }): Promise<ImageImageEnhancementOutputsMultipleSamplesAsUrl>;
    enhancement(args: ImageImageEnhancementInputs): Promise<ImageImageEnhancementOutputs>;
    faceBluring(args: ImageImageFaceBluringInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageFaceBluringOutputsOneSampleAsUrl>;
    faceBluring(args: ImageImageFaceBluringInputs & {
        asUrl: true;
    }): Promise<ImageImageFaceBluringOutputsMultipleSamplesAsUrl>;
    faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageImageGuidedInpaintingOutputsMultipleSamplesAsUrl>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs): Promise<ImageImageImageGuidedInpaintingOutputs>;
    inpainting(args: ImageImageInpaintingInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageInpaintingOutputsOneSampleAsUrl>;
    inpainting(args: ImageImageInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageInpaintingOutputsMultipleSamplesAsUrl>;
    inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs>;
    uncolorization(args: ImageImageUncolorizationInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<ImageImageUncolorizationOutputsOneSampleAsUrl>;
    uncolorization(args: ImageImageUncolorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageUncolorizationOutputsMultipleSamplesAsUrl>;
    uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs>;
}

import { ImageImageBackgroundRemovalInputs, ImageImageBackgroundReplacementInputs, ImageImageColorizationInputs, ImageImageDeblurringInputs, ImageImageEnhancementInputs, ImageImageFaceBluringInputs, ImageImageGuidedInpaintingInputs, ImageImageImageGuidedInpaintingInputs, ImageImageInpaintingInputs, ImageImageUncolorizationInputs } from './input-models';
import { ImageImageBackgroundRemovalOutputs, ImageImageBackgroundRemovalOutputsOneSampleAsUrl, ImageImageBackgroundReplacementOutputs, ImageImageBackgroundReplacementOutputsOneSampleAsUrl, ImageImageColorizationOutputs, ImageImageColorizationOutputsOneSampleAsUrl, ImageImageDeblurringOutputs, ImageImageDeblurringOutputsOneSampleAsUrl, ImageImageEnhancementOutputs, ImageImageEnhancementOutputsOneSampleAsUrl, ImageImageFaceBluringOutputs, ImageImageFaceBluringOutputsOneSampleAsUrl, ImageImageGuidedInpaintingOutputs, ImageImageGuidedInpaintingOutputsOneSampleAsUrl, ImageImageImageGuidedInpaintingOutputs, ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl, ImageImageInpaintingOutputs, ImageImageInpaintingOutputsOneSampleAsUrl, ImageImageUncolorizationOutputs, ImageImageUncolorizationOutputsOneSampleAsUrl } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromImageToImage {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundRemovalOutputsOneSampleAsUrl>;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundReplacementOutputsOneSampleAsUrl>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs>;
    colorization(args: ImageImageColorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageColorizationOutputsOneSampleAsUrl>;
    colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs>;
    deblurring(args: ImageImageDeblurringInputs & {
        asUrl: true;
    }): Promise<ImageImageDeblurringOutputsOneSampleAsUrl>;
    deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs>;
    enhancement(args: ImageImageEnhancementInputs & {
        asUrl: true;
    }): Promise<ImageImageEnhancementOutputsOneSampleAsUrl>;
    enhancement(args: ImageImageEnhancementInputs): Promise<ImageImageEnhancementOutputs>;
    faceBluring(args: ImageImageFaceBluringInputs & {
        asUrl: true;
    }): Promise<ImageImageFaceBluringOutputsOneSampleAsUrl>;
    faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs): Promise<ImageImageImageGuidedInpaintingOutputs>;
    inpainting(args: ImageImageInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageInpaintingOutputsOneSampleAsUrl>;
    inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs>;
    uncolorization(args: ImageImageUncolorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageUncolorizationOutputsOneSampleAsUrl>;
    uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs>;
}

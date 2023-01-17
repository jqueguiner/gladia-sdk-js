import { ImageImageBackgroundRemovalInputs, ImageImageBackgroundReplacementInputs, ImageImageColorizationInputs, ImageImageDeblurringInputs, ImageImageEnhancementInputs, ImageImageFaceBluringInputs, ImageImageGuidedInpaintingInputs, ImageImageImageGuidedInpaintingInputs, ImageImageInpaintingInputs, ImageImageUncolorizationInputs } from './input-models';
import { ImageImageBackgroundRemovalOutputsOneSampleAsUrl, ImageImageBackgroundReplacementOutputsOneSampleAsUrl, ImageImageColorizationOutputsOneSampleAsUrl, ImageImageDeblurringOutputsOneSampleAsUrl, ImageImageEnhancementOutputsOneSampleAsUrl, ImageImageFaceBluringOutputsOneSampleAsUrl, ImageImageGuidedInpaintingOutputsOneSampleAsUrl, ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl, ImageImageInpaintingOutputsOneSampleAsUrl, ImageImageUncolorizationOutputsOneSampleAsUrl } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromImageToImage {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundRemovalOutputsOneSampleAsUrl>;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ArrayBuffer>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs & {
        asUrl: true;
    }): Promise<ImageImageBackgroundReplacementOutputsOneSampleAsUrl>;
    backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ArrayBuffer>;
    colorization(args: ImageImageColorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageColorizationOutputsOneSampleAsUrl>;
    colorization(args: ImageImageColorizationInputs): Promise<ArrayBuffer>;
    deblurring(args: ImageImageDeblurringInputs & {
        asUrl: true;
    }): Promise<ImageImageDeblurringOutputsOneSampleAsUrl>;
    deblurring(args: ImageImageDeblurringInputs): Promise<ArrayBuffer>;
    enhancement(args: ImageImageEnhancementInputs & {
        asUrl: true;
    }): Promise<ImageImageEnhancementOutputsOneSampleAsUrl>;
    enhancement(args: ImageImageEnhancementInputs): Promise<ArrayBuffer>;
    faceBluring(args: ImageImageFaceBluringInputs & {
        asUrl: true;
    }): Promise<ImageImageFaceBluringOutputsOneSampleAsUrl>;
    faceBluring(args: ImageImageFaceBluringInputs): Promise<ArrayBuffer>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ArrayBuffer>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageImageGuidedInpaintingOutputsOneSampleAsUrl>;
    imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs): Promise<ArrayBuffer>;
    inpainting(args: ImageImageInpaintingInputs & {
        asUrl: true;
    }): Promise<ImageImageInpaintingOutputsOneSampleAsUrl>;
    inpainting(args: ImageImageInpaintingInputs): Promise<ArrayBuffer>;
    uncolorization(args: ImageImageUncolorizationInputs & {
        asUrl: true;
    }): Promise<ImageImageUncolorizationOutputsOneSampleAsUrl>;
    uncolorization(args: ImageImageUncolorizationInputs): Promise<ArrayBuffer>;
}

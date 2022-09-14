import { ImageImageBackgroundRemovalInputs, ImageImageColorizationInputs, ImageImageDeblurringInputs, ImageImageFaceBluringInputs, ImageImageGuidedInpaintingInputs, ImageImageInpaintingInputs, ImageImageSuperResolutionInputs, ImageImageUncolorizationInputs } from './input-models';
import { ImageImageBackgroundRemovalOutputs, ImageImageColorizationOutputs, ImageImageDeblurringOutputs, ImageImageFaceBluringOutputs, ImageImageGuidedInpaintingOutputs, ImageImageInpaintingOutputs, ImageImageSuperResolutionOutputs, ImageImageUncolorizationOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromImageToImage {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs>;
    colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs>;
    deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs>;
    faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs>;
    guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs>;
    inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs>;
    superResolution(args: ImageImageSuperResolutionInputs): Promise<ImageImageSuperResolutionOutputs>;
    uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs>;
}

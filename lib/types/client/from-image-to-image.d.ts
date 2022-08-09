import { ImageImageBackgroundRemovalInputs, ImageImageColorizationInputs, ImageImageFaceBluringInputs, ImageImageUncolorizationInputs } from './input-models';
import { ImageImageBackgroundRemovalOutputs, ImageImageColorizationOutputs, ImageImageFaceBluringOutputs, ImageImageUncolorizationOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromImageToImage {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs>;
    colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs>;
    faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs>;
    uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs>;
}

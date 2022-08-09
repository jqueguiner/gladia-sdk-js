import { FromImageToImage } from './from-image-to-image';
import { FromImageToText } from './from-image-to-text';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromImage {
    private fromImageToImageInst;
    private fromImageToTextInst;
    constructor(params: GladiaClientParams);
    toImage(): FromImageToImage;
    toText(): FromImageToText;
}

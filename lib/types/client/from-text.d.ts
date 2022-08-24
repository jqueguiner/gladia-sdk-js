import { FromTextToImage } from './from-text-to-image';
import { FromTextToText } from './from-text-to-text';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromText {
    private fromTextToImageInst;
    private fromTextToTextInst;
    constructor(params: GladiaClientParams);
    toImage(): FromTextToImage;
    toText(): FromTextToText;
}

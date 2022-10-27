import { ImageTextClassificationInputs, ImageTextOcrInputs } from './input-models';
import { ImageTextClassificationOutputs, ImageTextOcrOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromImageToText {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    classification(args: ImageTextClassificationInputs): Promise<ImageTextClassificationOutputs>;
    ocr(args: ImageTextOcrInputs): Promise<ImageTextOcrOutputs>;
}

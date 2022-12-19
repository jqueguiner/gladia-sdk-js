import { FromVideoToText } from './from-video-to-text';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromVideo {
    private fromVideoToTextInst;
    constructor(params: GladiaClientParams);
    toText(): FromVideoToText;
}

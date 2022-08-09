import { FromAudioToText } from './from-audio-to-text';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromAudio {
    private fromAudioToTextInst;
    constructor(params: GladiaClientParams);
    toText(): FromAudioToText;
}

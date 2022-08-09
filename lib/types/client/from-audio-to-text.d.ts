import { AudioTextSpeech_to_textInputs } from './input-models';
import { AudioTextSpeech_to_textOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromAudioToText {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    speech_to_text(args: AudioTextSpeech_to_textInputs): Promise<AudioTextSpeech_to_textOutputs>;
}

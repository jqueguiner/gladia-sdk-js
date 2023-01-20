import { AudioTextAudioTranscriptionInputs, AudioTextSpeakerDiarizationInputs } from './input-models';
import { AudioTextAudioTranscriptionOutputs, AudioTextSpeakerDiarizationOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromAudioToText {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    audioTranscription(args: AudioTextAudioTranscriptionInputs): Promise<AudioTextAudioTranscriptionOutputs>;
    speakerDiarization(args: AudioTextSpeakerDiarizationInputs): Promise<AudioTextSpeakerDiarizationOutputs>;
}

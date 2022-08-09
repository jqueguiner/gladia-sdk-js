import { GladiaClientParams } from './client/gladia-client-params';
import { Shortcuts } from './client/shortcuts';
import { FromAudio } from './client/from-audio';
import { FromImage } from './client/from-image';
import { FromText } from './client/from-text';
export declare class GladiaClient extends Shortcuts {
    private fromAudioInst;
    private fromImageInst;
    private fromTextInst;
    constructor(params: GladiaClientParams);
    fromAudio(): FromAudio;
    fromImage(): FromImage;
    fromText(): FromText;
}

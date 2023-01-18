import { GladiaClientParams } from './client/gladia-client-params';
import { Shortcuts } from './client/shortcuts';
import { FromAudio } from './client/from-audio';
import { FromImage } from './client/from-image';
import { FromText } from './client/from-text';
import { GladiaClientBase } from './client/gladia-client-base';
export declare class GladiaClient extends GladiaClientBase {
    private fromAudioInst;
    private fromImageInst;
    private fromTextInst;
    constructor(params: GladiaClientParams);
    fromAudio(): FromAudio;
    fromImage(): FromImage;
    fromText(): FromText;
}
export interface GladiaClient extends GladiaClientBase, Shortcuts {
}

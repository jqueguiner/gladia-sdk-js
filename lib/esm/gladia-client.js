/* Generated file with "scripts/generate-sdk.ts" */
import { Shortcuts } from './client/shortcuts';
import { FromAudio } from './client/from-audio';
import { FromImage } from './client/from-image';
import { FromText } from './client/from-text';
export class GladiaClient extends Shortcuts {
    constructor(params) {
        super();
        this.fromAudioInst = new FromAudio(params);
        this.fromImageInst = new FromImage(params);
        this.fromTextInst = new FromText(params);
    }
    fromAudio() {
        return this.fromAudioInst;
    }
    fromImage() {
        return this.fromImageInst;
    }
    fromText() {
        return this.fromTextInst;
    }
}

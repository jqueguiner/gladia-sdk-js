/* Generated file with "scripts/generate-sdk.ts" */
import { Shortcuts } from './client/shortcuts';
import { FromAudio } from './client/from-audio';
import { FromImage } from './client/from-image';
import { FromText } from './client/from-text';
export class GladiaClient extends Shortcuts {
    constructor(params) {
        var _a;
        super();
        const validatedParams = {
            ...params,
            useFetch: (_a = params.useFetch) !== null && _a !== void 0 ? _a : false,
        };
        this.fromAudioInst = new FromAudio(validatedParams);
        this.fromImageInst = new FromImage(validatedParams);
        this.fromTextInst = new FromText(validatedParams);
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

/* Generated file with "scripts/generate-sdk.ts" */
import { Shortcuts } from './client/shortcuts';
import { FromAudio } from './client/from-audio';
import { FromImage } from './client/from-image';
import { FromText } from './client/from-text';
import { GladiaClientBase } from './client/gladia-client-base';
import { applyMixins } from './utils/mixin';
export class GladiaClient extends GladiaClientBase {
    constructor(params) {
        var _a, _b;
        const validatedParams = {
            ...params,
            useFetch: (_a = params.useFetch) !== null && _a !== void 0 ? _a : false,
            useXhr: (_b = params.useXhr) !== null && _b !== void 0 ? _b : false,
        };
        super(validatedParams);
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
applyMixins(GladiaClient, [Shortcuts]);

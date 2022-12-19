import { VideoTextActionClassificationsInputs } from './input-models';
import { VideoTextActionClassificationsOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromVideoToText {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    actionClassifications(args: VideoTextActionClassificationsInputs): Promise<VideoTextActionClassificationsOutputs>;
}

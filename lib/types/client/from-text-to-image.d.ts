import { TextImageImageGenerationInputs } from './input-models';
import { TextImageImageGenerationOutputsMultipleSamples, TextImageImageGenerationOutputsOneSample, TextImageImageGenerationOutputsMultipleSamplesAsUrl, TextImageImageGenerationOutputsOneSampleAsUrl } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromTextToImage {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    imageGeneration(args: TextImageImageGenerationInputs & {
        samples: 1;
        asUrl: true;
    }): Promise<TextImageImageGenerationOutputsOneSampleAsUrl>;
    imageGeneration(args: TextImageImageGenerationInputs & {
        asUrl: true;
    }): Promise<TextImageImageGenerationOutputsMultipleSamplesAsUrl>;
    imageGeneration(args: TextImageImageGenerationInputs & {
        samples: 1;
    }): Promise<TextImageImageGenerationOutputsOneSample>;
    imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputsMultipleSamples>;
}

import { GladiaClientParams } from './gladia-client-params';
import { Trainables } from './Trainables';
export declare abstract class GladiaClientBase {
    private trainableInst;
    constructor(params: GladiaClientParams);
    trainable(): Trainables;
}

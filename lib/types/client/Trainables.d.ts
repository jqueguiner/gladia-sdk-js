import { AutoMLTrainable } from './automl/AutoMLTrainable';
import { GladiaClientParams } from './gladia-client-params';
export declare class Trainables {
    private readonly autoMLInst;
    constructor(params: GladiaClientParams);
    automl(): AutoMLTrainable;
}

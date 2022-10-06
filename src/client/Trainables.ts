import { AutoMLTrainable } from './automl/AutoMLTrainable';
import { GladiaClientParams } from './gladia-client-params';

export class Trainables {
  private readonly autoMLInst: AutoMLTrainable;

  constructor(params: GladiaClientParams) {
    this.autoMLInst = new AutoMLTrainable(params);
  }

  automl() {
    return this.autoMLInst;
  }
}

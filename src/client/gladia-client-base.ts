import { GladiaClientParams } from './gladia-client-params';
import { Trainables } from './Trainables';

export abstract class GladiaClientBase {
  private trainableInst: Trainables;

  constructor(params: GladiaClientParams) {
    this.trainableInst = new Trainables(params);
  }

  trainable() {
    return this.trainableInst;
  }
}

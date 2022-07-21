import { FromTextToText } from './from-text-to-text';
import { GladiaClientParams } from './gladia-client';

export class FromText {
  private fromTextToTextInst: FromTextToText;
  constructor(private params: GladiaClientParams) {
    this.fromTextToTextInst = new FromTextToText(this.params);
  }

  toText() {
    return this.fromTextToTextInst;
  }
}

/* Generated file with "scripts/generate-sdk.ts" */

import { FromTextToText } from './from-text-to-text';
import { GladiaClientParams } from './gladia-client-params';

export class FromText {
  private fromTextToTextInst: FromTextToText;

  constructor(params: GladiaClientParams) {
    this.fromTextToTextInst = new FromTextToText(params);
  }

  toText() {
    return this.fromTextToTextInst;
  }

}

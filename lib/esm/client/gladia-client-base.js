import { Trainables } from './Trainables';
export class GladiaClientBase {
    constructor(params) {
        this.trainableInst = new Trainables(params);
    }
    trainable() {
        return this.trainableInst;
    }
}

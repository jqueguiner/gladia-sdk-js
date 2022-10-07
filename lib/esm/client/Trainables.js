import { AutoMLTrainable } from './automl/AutoMLTrainable';
export class Trainables {
    constructor(params) {
        this.autoMLInst = new AutoMLTrainable(params);
    }
    automl() {
        return this.autoMLInst;
    }
}

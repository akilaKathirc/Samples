import { Reporter } from "../interface/reporter";

export const constReporter: Reporter = {
    message: 'Const message',

    report() {
        console.log('const report');
    }
}


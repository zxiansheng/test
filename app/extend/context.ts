import { get } from 'lodash';

module.exports = {
    input(value: any = '', defaults: any = ''): any {
        let inputs;
        if (this.method === 'POST') {
            inputs = this.request.body;
        } else {
            inputs = this.request.query;
        }
        if (value) {
            return get(inputs, value, defaults);
        }
        return inputs;

    },
};

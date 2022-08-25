import { searchParamSerializer } from './search-query-param-serializer';
export class UrlFormData {
    constructor(fromString) {
        this.data = {};
        if (fromString && fromString.length > 1) {
            this.data = Object.fromEntries(fromString
                .split('&')
                .map((s) => s.split('='))
                .map(([k, v]) => [k, decodeURI(v)])
                .map(([k, v]) => (v.includes(',') ? [k, v.split(',')] : [k, v])));
        }
    }
    append(key, value) {
        this.data[key] = value;
    }
    get(key) {
        return this.data[key];
    }
    toString() {
        return searchParamSerializer(this.data);
    }
}

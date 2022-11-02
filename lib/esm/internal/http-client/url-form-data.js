import { searchParamDeserializer, searchParamSerializer } from './search-query-param-serializer';
export class UrlFormData {
    constructor(fromString) {
        this.data = {};
        this.data = searchParamDeserializer(fromString);
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

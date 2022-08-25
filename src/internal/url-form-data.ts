import { searchParamSerializer } from './search-query-param-serializer';

type UrlFormDataValueType = string | number | boolean | string[];
export class UrlFormData {
  private data: Record<string, UrlFormDataValueType> = {};

  constructor(fromString?: string) {
    if (fromString && fromString.length > 1) {
      this.data = Object.fromEntries(
        fromString
          .split('&')
          .map((s) => s.split('='))
          .map(([k, v]) => [k, decodeURI(v)])
          .map(([k, v]) => (v.includes(',') ? [k, v.split(',')] : [k, v])),
      );
    }
  }

  append(key: string, value: UrlFormDataValueType) {
    this.data[key] = value;
  }

  get(key: string): UrlFormDataValueType {
    return this.data[key];
  }

  toString() {
    return searchParamSerializer(this.data);
  }
}

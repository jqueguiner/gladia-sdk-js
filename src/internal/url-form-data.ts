import { searchParamSerializer } from './search-query-param-serializer';

export class UrlFormData {
  private data: Record<string, string | number | boolean> = {};

  constructor(fromString?: string) {
    if (fromString && fromString.length > 1) {
      this.data = Object.fromEntries(
        fromString
          .split('&')
          .map((s) => s.split('='))
          .map(([k, v]) => [k, decodeURI(v)]),
      );
    }
  }

  append(key: string, value: string | number | boolean) {
    this.data[key] = value;
  }

  get(key: string): string | number | boolean {
    return this.data[key];
  }

  toString() {
    return searchParamSerializer(this.data);
  }
}

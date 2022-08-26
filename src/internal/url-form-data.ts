import { searchParamDeserializer, searchParamSerializer } from './search-query-param-serializer';

type UrlFormDataValueType = string | number | boolean | string[];
export class UrlFormData {
  private data: Record<string, UrlFormDataValueType> = {};

  constructor(fromString?: string) {
    this.data = searchParamDeserializer(fromString);
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

declare type UrlFormDataValueType = string | number | boolean | string[];
export declare class UrlFormData {
    private data;
    constructor(fromString?: string);
    append(key: string, value: UrlFormDataValueType): void;
    get(key: string): UrlFormDataValueType;
    toString(): string;
}
export {};

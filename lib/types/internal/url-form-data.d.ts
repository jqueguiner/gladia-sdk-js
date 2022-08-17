export declare class UrlFormData {
    private data;
    constructor(fromString?: string);
    append(key: string, value: string | number | boolean): void;
    get(key: string): string | number | boolean;
    toString(): string;
}

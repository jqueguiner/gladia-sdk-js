export interface WithHeaders {
    headers?: Record<string, string | number | boolean>;
}
export interface WithModel<T> {
    model?: T;
}

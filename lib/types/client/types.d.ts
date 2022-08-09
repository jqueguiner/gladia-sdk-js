export interface WithImage {
    image: Blob;
}
export interface WithText {
    text: string;
}
export interface WithModel<T> {
    model?: T;
}

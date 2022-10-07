export class PreviewFeatureError extends Error {
    constructor() {
        super('This feature is not available without enabling preview feature.');
    }
}

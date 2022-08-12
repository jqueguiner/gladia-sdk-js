export function axiosFetchAdapter() {
    return import('@vespaiach/axios-fetch-adapter').then((m) => m.default);
}

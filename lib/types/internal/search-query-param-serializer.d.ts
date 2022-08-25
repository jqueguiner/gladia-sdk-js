declare type ParamValueType = string | number | boolean | string[];
export declare function searchQueryParamSerializer(params: Record<string, ParamValueType> | undefined | null): string;
export declare function searchParamSerializer(params: Record<string, ParamValueType> | null): string;
export {};

export interface WithAsUrl {
  asUrl?: boolean;
}

export interface WithHeaders {
  headers?: Record<string, string | number | boolean>;
}

export interface WithModel<T> {
  model?: T;
}

import {
  searchQueryParamSerializer,
  searchParamSerializer,
} from '../../src/internal/search-query-param-serializer';

describe(searchQueryParamSerializer.name, () => {
  it('should return empty string for no param', () => {
    expect(searchQueryParamSerializer({})).toEqual('');
  });

  it('should return empty string for not defined params', () => {
    expect(searchQueryParamSerializer(undefined)).toEqual('');
    expect(searchQueryParamSerializer(null)).toEqual('');
  });

  it('should return valid query param for one basic param', () => {
    expect(searchQueryParamSerializer({ a: 'A' })).toEqual('?a=A');
  });

  it('should return valid query param for one param with serialization needed', () => {
    expect(searchQueryParamSerializer({ a: 'A B C' })).toEqual('?a=A%20B%20C');
  });

  it('should return valid query param for multiple basic param', () => {
    expect(searchQueryParamSerializer({ a: 'A', x: 'X' })).toEqual('?a=A&x=X');
  });

  it('should return valid query param for multiple param with serialization needed', () => {
    expect(searchQueryParamSerializer({ a: 'A B C', x: 'X Y Z' })).toEqual(
      '?a=A%20B%20C&x=X%20Y%20Z',
    );
  });

  it('should return valid query param for multiple param with some needing serialization', () => {
    expect(searchQueryParamSerializer({ a: 'A B C', x: 'X' })).toEqual('?a=A%20B%20C&x=X');
  });

  it('should not explode array param', () => {
    expect(searchQueryParamSerializer({ a: ['A B C', 'X'] })).toEqual('?a=A%20B%20C,X');
  });
});

describe(searchParamSerializer.name, () => {
  it('should return empty string for no param', () => {
    expect(searchParamSerializer({})).toEqual('');
  });

  it('should return valid query param for one basic param', () => {
    expect(searchParamSerializer({ a: 'A' })).toEqual('a=A');
  });

  it('should return valid query param for one param with serialization needed', () => {
    expect(searchParamSerializer({ a: 'A B C' })).toEqual('a=A%20B%20C');
  });

  it('should return valid query param for multiple basic param', () => {
    expect(searchParamSerializer({ a: 'A', x: 'X' })).toEqual('a=A&x=X');
  });

  it('should return valid query param for multiple param with serialization needed', () => {
    expect(searchParamSerializer({ a: 'A B C', x: 'X Y Z' })).toEqual('a=A%20B%20C&x=X%20Y%20Z');
  });

  it('should return valid query param for multiple param with some needing serialization', () => {
    expect(searchParamSerializer({ a: 'A B C', x: 'X' })).toEqual('a=A%20B%20C&x=X');
  });

  it('should not explode array param', () => {
    expect(searchParamSerializer({ a: ['A B C', 'X'] })).toEqual('a=A%20B%20C,X');
  });
});

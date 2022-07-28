import {
  capitalizeFirst,
  kebabToCamelCase,
  kebabToPascalCase,
  kebabToSnakeCase,
  uncapitalizeFirst,
} from '../../src/meta/utils';

describe(capitalizeFirst.name, () => {
  it('should replace first letter by capitalized one', () => {
    expect(capitalizeFirst('a')).toEqual('A');
    expect(capitalizeFirst('aa')).toEqual('Aa');
    expect(capitalizeFirst(' aa')).toEqual(' aa');
  });
  it('should do nothing if first letter is already capitalized', () => {
    expect(capitalizeFirst('A')).toEqual('A');
    expect(capitalizeFirst('Aa')).toEqual('Aa');
    expect(capitalizeFirst('AA')).toEqual('AA');
  });
});
describe(uncapitalizeFirst.name, () => {
  it('should replace first letter by lowercase one', () => {
    expect(uncapitalizeFirst('A')).toEqual('a');
    expect(uncapitalizeFirst('AA')).toEqual('aA');
    expect(uncapitalizeFirst(' AA')).toEqual(' AA');
  });
  it('should do nothing if first letter is already lowercase', () => {
    expect(uncapitalizeFirst('a')).toEqual('a');
    expect(uncapitalizeFirst('aA')).toEqual('aA');
    expect(uncapitalizeFirst('aa')).toEqual('aa');
  });
});
describe(kebabToPascalCase.name, () => {
  it('should capitalize the first word letter remove hyphen and capitalize first letter of the next word', () => {
    expect(kebabToPascalCase('lorem-ipsum')).toEqual('LoremIpsum');
  });
  it('should do nothing for well formatted string', () => {
    expect(kebabToPascalCase('LoremIpsum')).toEqual('LoremIpsum');
  });
  it('should act like capitalize first for one word', () => {
    expect(kebabToPascalCase('lorem')).toEqual('Lorem');
  });
});
describe(kebabToSnakeCase.name, () => {
  it('should capitalize the first word letter remove hyphen and capitalize first letter of the next word', () => {
    expect(kebabToSnakeCase('lorem-ipsum')).toEqual('lorem_ipsum');
  });
  it('should do nothing for well formatted string', () => {
    expect(kebabToSnakeCase('lorem_ipsum')).toEqual('lorem_ipsum');
  });
  it('should do nothing for one word', () => {
    expect(kebabToSnakeCase('lorem')).toEqual('lorem');
  });
});
describe(kebabToCamelCase.name, () => {
  it('should capitalize first letter of every word except first', () => {
    expect(kebabToCamelCase('lorem-ipsum')).toEqual('loremIpsum');
  });
  it('should do nothing for well formatted string', () => {
    expect(kebabToCamelCase('loremIpsum')).toEqual('loremIpsum');
  });
  it('should do nothing for one word', () => {
    expect(kebabToCamelCase('lorem')).toEqual('lorem');
  });
});

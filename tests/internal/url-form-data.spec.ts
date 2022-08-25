import { UrlFormData } from '../../src/internal/url-form-data';

describe(UrlFormData.name, () => {
  describe('basis', () => {
    it('should be able to append simple data to the form and get it back', () => {
      const form = new UrlFormData();
      form.append('number', 123456);
      form.append('float', 123.456);
      form.append('string', 'this is text');
      form.append('bool', true);
      expect(form.get('number')).toEqual(123456);
      expect(form.get('float')).toEqual(123.456);
      expect(form.get('string')).toEqual('this is text');
      expect(form.get('bool')).toEqual(true);
    });
    it('should be able to append array data to the form and get it back', () => {
      const form = new UrlFormData();
      form.append('array', ['this is text', 'thing']);
      expect(form.get('array')).toEqual(['this is text', 'thing']);
    });
  });
  describe('serialization/deserialization', () => {
    it('empty form should be serializable', () => {
      const form = new UrlFormData();
      expect(form.toString()).toEqual('');
    });
    it('empty form should be deserializable', () => {
      const form = new UrlFormData();
      expect(new UrlFormData(form.toString())).toEqual(new UrlFormData());
    });
    it('form with one basic string value should be serializable', () => {
      const form = new UrlFormData();
      form.append('foo', 'bar');
      expect(form.toString()).toEqual('foo=bar');
    });
    it('form with one basic string value should be deserializable', () => {
      const form = new UrlFormData();
      form.append('foo', 'bar');
      expect(new UrlFormData(form.toString())).toEqual(form);
    });
    it('form with multiple basic string value should be serializable', () => {
      const form = new UrlFormData();
      form.append('foo', 'bar');
      form.append('bar', 'baz');
      expect(form.toString()).toEqual('foo=bar&bar=baz');
    });
    it('form with multiple basic string value should be deserializable', () => {
      const form = new UrlFormData();
      form.append('foo', 'bar');
      form.append('bar', 'baz');
      expect(new UrlFormData(form.toString())).toEqual(form);
    });
    it('form with array value should be serializable', () => {
      const form = new UrlFormData();
      form.append('foo', ['bar', 'baz']);
      expect(form.toString()).toEqual('foo=bar,baz');
    });
    it('form with array value should be deserializable', () => {
      const form = new UrlFormData();
      form.append('foo', ['bar', 'baz']);
      expect(new UrlFormData(form.toString())).toEqual(form);
    });
  });
});

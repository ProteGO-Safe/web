import fetchParamValue from '../index';

describe('url query value fetcher', () => {
  it('should fetch param value', () => {
    const query = '?p=1';
    const exceptedValue = '1';

    const value = fetchParamValue(query, 'p');
    expect(value).toEqual(exceptedValue);
  });

  it('should fetch undefined param value', () => {
    const query = undefined;

    const value = fetchParamValue(query, 'p');
    expect(value).toBeUndefined();
  });

  it('should fetch undefined param value when param not found', () => {
    const query = '?a=1';

    const value = fetchParamValue(query, 'p');
    expect(value).toBeUndefined();
  });
});

import { addDays, someTimeWasUp } from '../index';

const mockNowDate = timestamp => {
  const mockDate = new Date(timestamp * 1000);
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
};

describe('date', () => {
  it('should add days', () => {
    const timestamp = addDays(1606382484, 10);
    expect(timestamp).toEqual(1607246484);
  });
  it('should check if some timestamp was up - undefined', () => {
    mockNowDate(1606333022);
    const timeWasUp = someTimeWasUp(undefined);
    expect(timeWasUp).toEqual(false);
  });

  it('should check if some timestamp was up - positive', () => {
    mockNowDate(1606333022);
    const timeWasUp = someTimeWasUp([1606333021, 1606333023]);
    expect(timeWasUp).toEqual(true);
  });

  it('should check if some timestamp was up - negative', () => {
    mockNowDate(1606333022);
    const timeWasUp = someTimeWasUp([1606333023]);
    expect(timeWasUp).toEqual(false);
  });
});

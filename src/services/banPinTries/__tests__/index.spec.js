import banPinTries from '../index';

const mockNowDate = timestamp => {
  const mockDate = new Date(timestamp);
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
};

const ONE_MINUTE = 60000;
const HALF_MINUTE = ONE_MINUTE / 2;
const ONE_SECOND = ONE_MINUTE / 60;

describe('banPinTries', () => {
  it('should create banPinTries data when 3 tries were in 1 minute ', () => {
    const someTime = 1603646850616;
    mockNowDate(someTime);
    const banInfo = banPinTries.getBanData([
      someTime - 3 * ONE_SECOND,
      someTime - 2 * ONE_SECOND,
      someTime - ONE_SECOND
    ]);
    const expectedBanInfo = { currentLimitOfTries: 3, lockdownTime: 60000 };
    expect(banInfo).toEqual(expectedBanInfo);
  });

  it('should create banPinTries data when 5 tries were in 2 minutes ', () => {
    const someTime = 1603646850616;
    mockNowDate(someTime);
    const banInfo = banPinTries.getBanData([
      someTime - ONE_MINUTE - HALF_MINUTE - 3 * ONE_SECOND,
      someTime - ONE_MINUTE - HALF_MINUTE - 2 * ONE_SECOND,
      someTime - ONE_MINUTE - HALF_MINUTE,
      someTime - ONE_MINUTE,
      someTime - ONE_SECOND
    ]);
    const expectedBanInfo = { currentLimitOfTries: 5, lockdownTime: 300000 };
    expect(banInfo).toEqual(expectedBanInfo);
  });

  it('should create banPinTries data when 10 tries were in 10 minutes ', () => {
    const someTime = 1603646850616;
    mockNowDate(someTime);
    const banInfo = banPinTries.getBanData([
      someTime - 9 * ONE_MINUTE,
      someTime - 8 * ONE_MINUTE,
      someTime - 7 * ONE_MINUTE,
      someTime - 6 * ONE_MINUTE,
      someTime - 5 * ONE_MINUTE,
      someTime - 4 * ONE_MINUTE,
      someTime - 3 * ONE_MINUTE,
      someTime - 2 * ONE_MINUTE,
      someTime - ONE_MINUTE,
      someTime - ONE_SECOND
    ]);
    const expectedBanInfo = { currentLimitOfTries: 10, lockdownTime: 3600000 };
    expect(banInfo).toEqual(expectedBanInfo);
  });

  it('should create banPinTries data when 30 tries were in 120 minutes ', () => {
    const someTime = 1603646850616;
    mockNowDate(someTime);
    const banInfo = banPinTries.getBanData([
      someTime - 115 * ONE_MINUTE,
      someTime - 103 * ONE_MINUTE,
      someTime - 102 * ONE_MINUTE,
      someTime - 101 * ONE_MINUTE,
      someTime - 100 * ONE_MINUTE,
      someTime - 90 * ONE_MINUTE,
      someTime - 80 * ONE_MINUTE,
      someTime - 70 * ONE_MINUTE,
      someTime - 60 * ONE_MINUTE,
      someTime - 20 * ONE_MINUTE,
      someTime - 19 * ONE_MINUTE,
      someTime - 18 * ONE_MINUTE,
      someTime - 17 * ONE_MINUTE,
      someTime - 16 * ONE_MINUTE,
      someTime - 15 * ONE_MINUTE,
      someTime - 14 * ONE_MINUTE,
      someTime - 13 * ONE_MINUTE,
      someTime - 12 * ONE_MINUTE,
      someTime - 11 * ONE_MINUTE,
      someTime - 10 * ONE_MINUTE,
      someTime - 9 * ONE_MINUTE,
      someTime - 8 * ONE_MINUTE,
      someTime - 7 * ONE_MINUTE,
      someTime - 6 * ONE_MINUTE,
      someTime - 5 * ONE_MINUTE,
      someTime - 4 * ONE_MINUTE,
      someTime - 3 * ONE_MINUTE,
      someTime - 2 * ONE_MINUTE,
      someTime - ONE_MINUTE,
      someTime - ONE_SECOND
    ]);
    const expectedBanInfo = { currentLimitOfTries: 30, lockdownTime: 86400000 };
    expect(banInfo).toEqual(expectedBanInfo);
  });
});

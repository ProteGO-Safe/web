import { isVersionCompatibilityWithBluetoothModule } from '../index';

describe('version', () => {
  it('should be not compatible when servicesStatus is empty', () => {
    const servicesStatus = {};

    const isCompatible = isVersionCompatibilityWithBluetoothModule(
      servicesStatus
    );
    expect(isCompatible).toEqual(false);
  });

  it('should be not compatible when servicesStatus is undefined', () => {
    const servicesStatus = undefined;

    const isCompatible = isVersionCompatibilityWithBluetoothModule(
      servicesStatus
    );
    expect(isCompatible).toEqual(false);
  });

  it('should be compatible when servicesStatus has some object', () => {
    const servicesStatus = { key: 'value' };

    const isCompatible = isVersionCompatibilityWithBluetoothModule(
      servicesStatus
    );
    expect(isCompatible).toEqual(true);
  });
});

import flatDistricts from '../currentRestrictions.helpers';

describe('flatDistricts', () => {
  it('should flat districts', () => {
    const districts = [
      {
        id: 1,
        name: 'mazowieckie',
        districts: [
          {
            id: 1,
            name: 'grodziski',
            state: 1,
            is_subscribed: true
          },
          {
            id: 5,
            name: 'garwoliński',
            state: 0,
            is_subscribed: false
          }
        ]
      },
      {
        id: 2,
        name: 'donlośląskie',
        districts: [
          {
            id: 1,
            name: 'wrocławski',
            state: 1,
            is_subscribed: true
          },
          {
            id: 2,
            name: 'świdnicki',
            state: 2,
            is_subscribed: false
          }
        ]
      }
    ];

    const expectedDistricts = [
      {
        districtId: 5,
        name: 'garwoliński (mazowieckie)',
        state: 0,
        isSubscribed: false
      },
      {
        districtId: 1,
        name: 'grodziski (mazowieckie)',
        state: 1,
        isSubscribed: true
      },
      {
        districtId: 2,
        name: 'świdnicki (donlośląskie)',
        state: 2,
        isSubscribed: false
      },
      {
        districtId: 1,
        name: 'wrocławski (donlośląskie)',
        state: 1,
        isSubscribed: true
      }
    ];

    const flattedDistricts = flatDistricts(districts, '');
    expect(flattedDistricts).toEqual(expectedDistricts);
  });

  it('should flat and search districts', () => {
    const districts = [
      {
        id: 1,
        name: 'mazowieckie',
        districts: [
          {
            id: 1,
            name: 'grodziski',
            state: 1,
            is_subscribed: true
          },
          {
            id: 2,
            name: 'świdnicki',
            state: 2,
            is_subscribed: false
          }
        ]
      },
      {
        id: 2,
        name: 'donlośląskie',
        districts: [
          {
            id: 5,
            name: 'zgrowoliński',
            state: 0,
            is_subscribed: false
          },
          {
            id: 1,
            name: 'wrocławski',
            state: 1,
            is_subscribed: true
          }
        ]
      }
    ];

    const expectedDistricts = [
      {
        districtId: 1,
        name: 'grodziski (mazowieckie)',
        state: 1,
        isSubscribed: true
      },
      {
        districtId: 5,
        name: 'zgrowoliński (donlośląskie)',
        state: 0,
        isSubscribed: false
      }
    ];

    const flattedDistricts = flatDistricts(districts, 'gro');
    expect(flattedDistricts).toEqual(expectedDistricts);
  });
});

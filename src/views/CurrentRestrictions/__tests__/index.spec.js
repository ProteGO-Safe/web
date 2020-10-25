import {
  flatDistricts,
  prepareVoivodeshipsWithDistricts
} from '../currentRestrictions.helpers';

describe('flat districts', () => {
  it('should flat districts', () => {
    const districts = [
      {
        id: 1,
        name: 'mazowieckie',
        districts: [
          {
            id: 1,
            name: 'grodziski',
            state: 1
          },
          {
            id: 2,
            name: 'garwoliński',
            state: 0
          }
        ]
      },
      {
        id: 2,
        name: 'donlośląskie',
        districts: [
          {
            id: 3,
            name: 'wrocławski',
            state: 1
          },
          {
            id: 4,
            name: 'świdnicki',
            state: 2
          }
        ]
      }
    ];

    const subscribedDistricts = [
      {
        id: 2,
        name: 'garwoliński',
        state: 0
      },
      {
        id: 4,
        name: 'świdnicki',
        state: 2
      }
    ];

    const expectedDistricts = [
      {
        districtId: 2,
        name: 'garwoliński (mazowieckie)',
        state: 0,
        isSubscribed: true
      },
      {
        districtId: 1,
        name: 'grodziski (mazowieckie)',
        state: 1,
        isSubscribed: false
      },
      {
        districtId: 4,
        name: 'świdnicki (donlośląskie)',
        state: 2,
        isSubscribed: true
      },
      {
        districtId: 3,
        name: 'wrocławski (donlośląskie)',
        state: 1,
        isSubscribed: false
      }
    ];

    const flattedDistricts = flatDistricts(districts, '', subscribedDistricts);
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
            state: 1
          },
          {
            id: 2,
            name: 'świdnicki',
            state: 2
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
            state: 0
          },
          {
            id: 1,
            name: 'wrocławski',
            state: 1
          }
        ]
      }
    ];

    const subscribedDistricts = [];

    const expectedDistricts = [
      {
        districtId: 1,
        name: 'grodziski (mazowieckie)',
        state: 1,
        isSubscribed: false
      },
      {
        districtId: 5,
        name: 'zgrowoliński (donlośląskie)',
        state: 0,
        isSubscribed: false
      }
    ];

    const flattedDistricts = flatDistricts(
      districts,
      'gro',
      subscribedDistricts
    );
    expect(flattedDistricts).toEqual(expectedDistricts);
  });

  it('should flat and search uppercase district', () => {
    const districts = [
      {
        id: 1,
        name: 'mazowieckie',
        districts: [
          {
            id: 1,
            name: 'M. Wrocław',
            state: 1
          },
          {
            id: 2,
            name: 'świdnicki',
            state: 2
          }
        ]
      },
      {
        id: 2,
        name: 'donlośląskie',
        districts: [
          {
            id: 2,
            name: 'zgrowoliński',
            state: 0
          },
          {
            id: 5,
            name: 'M. Świdnica',
            state: 1
          }
        ]
      }
    ];

    const subscribedDistricts = [];

    const expectedDistricts = [
      {
        districtId: 5,
        name: 'M. Świdnica (donlośląskie)',
        state: 1,
        isSubscribed: false
      },
      {
        districtId: 1,
        name: 'M. Wrocław (mazowieckie)',
        state: 1,
        isSubscribed: false
      }
    ];

    const flattedDistricts = flatDistricts(
      districts,
      'm. ',
      subscribedDistricts
    );
    expect(flattedDistricts).toEqual(expectedDistricts);
  });
});

describe('prepare voivodeships with districts', () => {
  it('should prepare voivodeships with districts', () => {
    const voivodeships = [
      {
        id: 1,
        name: 'mazowieckie',
        districts: [
          {
            id: 1,
            name: 'grodziski',
            state: 1
          },
          {
            id: 2,
            name: 'garwoliński',
            state: 0
          }
        ]
      },
      {
        id: 2,
        name: 'donlośląskie',
        districts: [
          {
            id: 3,
            name: 'wrocławski',
            state: 1
          },
          {
            id: 4,
            name: 'świdnicki',
            state: 2
          }
        ]
      }
    ];

    const subscribedDistricts = [
      {
        id: 2,
        name: 'garwoliński',
        state: 0
      },
      {
        id: 4,
        name: 'świdnicki',
        state: 2
      }
    ];

    const expectedDistricts = [
      {
        id: 1,
        name: 'mazowieckie',
        districts: [
          {
            id: 1,
            name: 'grodziski',
            state: 1,
            isSubscribed: false
          },
          {
            id: 2,
            name: 'garwoliński',
            state: 0,
            isSubscribed: true
          }
        ]
      },
      {
        id: 2,
        name: 'donlośląskie',
        districts: [
          {
            id: 3,
            name: 'wrocławski',
            state: 1,
            isSubscribed: false
          },
          {
            id: 4,
            name: 'świdnicki',
            state: 2,
            isSubscribed: true
          }
        ]
      }
    ];

    const districts = prepareVoivodeshipsWithDistricts(
      voivodeships,
      subscribedDistricts
    );
    expect(districts).toEqual(expectedDistricts);
  });
});

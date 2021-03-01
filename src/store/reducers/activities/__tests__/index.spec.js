import { v4 } from 'uuid';
import { prepareActivities } from '../activities.helpers';
import { ACTIVITY_TYPE as TYPE } from '../../../../constants';

const createNativeNotification = (title, content, timestamp, id = v4()) => {
  return {
    id,
    title,
    content,
    timestamp
  };
};
const createNativeExposures = (riskLevel, timestamp, id = v4()) => {
  return {
    id,
    riskLevel,
    timestamp
  };
};
const createNativeRiskCheck = (keys, exposures, timestamp, id = v4()) => ({ id, keys, exposures, timestamp });

export const createActivity = ({
  title = '',
  content = '',
  timestamp,
  type,
  riskLevel = 0,
  riskChecks = [],
  isRead = false
}) => {
  return {
    id: v4(),
    isRead,
    title,
    type,
    content,
    timestamp,
    riskChecks,
    riskLevel
  };
};

describe('prepare notifications activities', () => {
  it('should prepare empty when all data are empty', () => {
    const activities = [];
    const notifications = [];
    const riskChecks = [];
    const exposures = [];

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([]);
  });
  it('should prepare empty when all data are undefined', () => {
    const activities = undefined;
    const notifications = undefined;
    const riskChecks = undefined;
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([]);
  });
  it('should prepare activities when only notifications received', () => {
    const notifications = [
      createNativeNotification('title1', 'content1', 6789),
      createNativeNotification('title2', 'content2', 12345)
    ];
    const activities = undefined;
    const riskChecks = undefined;
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: 'content2',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 12345,
        title: 'title2',
        type: TYPE.NOTIFICATION
      },
      {
        content: 'content1',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 6789,
        title: 'title1',
        type: TYPE.NOTIFICATION
      }
    ]);
  });
  it('should prepare activities when notifications exist and only notifications received', () => {
    const notifications = [
      createNativeNotification('title1', 'content1', 6789),
      createNativeNotification('title2', 'content2', 333)
    ];
    const activities = [
      createActivity({ title: 'title3', content: 'content3', timestamp: 111, type: TYPE.NOTIFICATION }),
      createActivity({ title: 'title4', content: 'content4', timestamp: 99999, type: TYPE.NOTIFICATION })
    ];
    const riskChecks = undefined;
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: 'content4',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 99999,
        title: 'title4',
        type: TYPE.NOTIFICATION
      },
      {
        content: 'content1',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 6789,
        title: 'title1',
        type: TYPE.NOTIFICATION
      },
      {
        content: 'content2',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 333,
        title: 'title2',
        type: TYPE.NOTIFICATION
      },
      {
        content: 'content3',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 111,
        title: 'title3',
        type: TYPE.NOTIFICATION
      }
    ]);
  });
  it('should prepare activities when notifications exist and exposures and notifications received', () => {
    const notifications = [createNativeNotification('title1', 'content1', 6789)];
    const activities = [
      createActivity({ title: 'title3', content: 'content3', timestamp: 111, type: TYPE.NOTIFICATION })
    ];
    const riskChecks = undefined;
    const exposures = [createNativeExposures(1, 5000)];

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: 'content1',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 6789,
        title: 'title1',
        type: TYPE.NOTIFICATION
      },
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 1,
        timestamp: 5000,
        title: '',
        type: TYPE.EXPOSURE
      },
      {
        content: 'content3',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 111,
        title: 'title3',
        type: TYPE.NOTIFICATION
      }
    ]);
  });
  it('should prepare activities when multiple risk checks received from different days', () => {
    const notifications = undefined;
    const activities = undefined;
    const riskChecks = [createNativeRiskCheck(12, 1, 1607074907), createNativeRiskCheck(10, 3, 1606988507)];
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [{ timestamp: 1607074907, keys: 12, exposures: 1 }],
        riskLevel: 0,
        timestamp: 1607074907,
        title: '',
        type: TYPE.RISK_CHECK
      },
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [{ timestamp: 1606988507, keys: 10, exposures: 3 }],
        riskLevel: 0,
        timestamp: 1606988507,
        title: '',
        type: TYPE.RISK_CHECK
      }
    ]);
  });
  it('should prepare activities when multiple risk checks received from the same day', () => {
    const notifications = undefined;
    const activities = undefined;
    const riskChecks = [createNativeRiskCheck(10, 3, 1607071307), createNativeRiskCheck(12, 1, 1607074907)];
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [
          { timestamp: 1607074907, keys: 12, exposures: 1 },
          { timestamp: 1607071307, keys: 10, exposures: 3 }
        ],
        riskLevel: 0,
        timestamp: 1607074907,
        title: '',
        type: TYPE.RISK_CHECK
      }
    ]);
  });
  it('should prepare activities when multiple risk checks received from the same day and one different', () => {
    const notifications = undefined;
    const activities = undefined;
    const riskChecks = [
      createNativeRiskCheck(10, 3, 1607071307),
      createNativeRiskCheck(100, 31, 1606981307),
      createNativeRiskCheck(12, 1, 1607074907)
    ];
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [
          { timestamp: 1607074907, keys: 12, exposures: 1 },
          { timestamp: 1607071307, keys: 10, exposures: 3 }
        ],
        riskLevel: 0,
        timestamp: 1607074907,
        title: '',
        type: TYPE.RISK_CHECK
      },
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [{ timestamp: 1606981307, keys: 100, exposures: 31 }],
        riskLevel: 0,
        timestamp: 1606981307,
        title: '',
        type: TYPE.RISK_CHECK
      }
    ]);
  });
  it('should prepare activities when multiple risk checks received from the same day and one exists from that day and the second from another day', () => {
    const notifications = undefined;
    const activities = [
      createActivity({
        riskChecks: [{ keys: 100, exposures: 12, timestamp: 1607067707 }],
        timestamp: 1607067707, // 4 December 2020
        type: TYPE.RISK_CHECK
      }),
      createActivity({
        riskChecks: [{ keys: 1000, exposures: 112, timestamp: 1606894907 }],
        timestamp: 1606894907, // 2 December 2020
        type: TYPE.RISK_CHECK
      })
    ];
    const riskChecks = [createNativeRiskCheck(10, 3, 1607071307), createNativeRiskCheck(12, 1, 1607074907)]; // 4 December 2020
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [
          { timestamp: 1607074907, keys: 12, exposures: 1 },
          { timestamp: 1607071307, keys: 10, exposures: 3 },
          { timestamp: 1607067707, keys: 100, exposures: 12 }
        ],
        riskLevel: 0,
        timestamp: 1607074907, // 4 December 2020
        title: '',
        type: TYPE.RISK_CHECK
      },
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [{ timestamp: 1606894907, keys: 1000, exposures: 112 }],
        riskLevel: 0,
        timestamp: 1606894907, // 2 December 2020
        title: '',
        type: TYPE.RISK_CHECK
      }
    ]);
  });
  it('should prepare activities when multiple risk checks received from different days and existing with different days', () => {
    const notifications = undefined;
    const activities = [
      createActivity({
        riskChecks: [{ keys: 1, exposures: 2, timestamp: 1607067707 }],
        timestamp: 1607067707, // 4 December 2020
        type: TYPE.RISK_CHECK
      }),
      createActivity({
        riskChecks: [{ keys: 3, exposures: 4, timestamp: 1606977227 }],
        timestamp: 1606977227, // 3 December 2020
        type: TYPE.RISK_CHECK
      }),
      createActivity({
        riskChecks: [
          { keys: 5, exposures: 6, timestamp: 1606894427 },
          { keys: 7, exposures: 8, timestamp: 1606890827 }
        ],
        timestamp: 1606894427, // 2 December 2020
        type: TYPE.RISK_CHECK
      }),
      createActivity({
        riskChecks: [{ keys: 15, exposures: 16, timestamp: 1606804427 }],
        timestamp: 1606804427, // 1 December 2020
        type: TYPE.RISK_CHECK
      })
    ];
    const riskChecks = [
      createNativeRiskCheck(9, 10, 1607071307), // 4 December 2020
      createNativeRiskCheck(11, 12, 1606808507), // 1 December 2020
      createNativeRiskCheck(13, 14, 1607074907), // 4 December 2020
      createNativeRiskCheck(17, 18, 1606892427) // 2 December 2020
    ];
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [
          { timestamp: 1607074907, keys: 13, exposures: 14 },
          { timestamp: 1607071307, keys: 9, exposures: 10 },
          { timestamp: 1607067707, keys: 1, exposures: 2 }
        ],
        riskLevel: 0,
        timestamp: 1607074907, // 4 December 2020
        title: '',
        type: TYPE.RISK_CHECK
      },
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [{ timestamp: 1606977227, keys: 3, exposures: 4 }],
        riskLevel: 0,
        timestamp: 1606977227, // 3 December 2020
        title: '',
        type: TYPE.RISK_CHECK
      },
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [
          { timestamp: 1606894427, keys: 5, exposures: 6 },
          { timestamp: 1606892427, keys: 17, exposures: 18 },
          { timestamp: 1606890827, keys: 7, exposures: 8 }
        ],
        riskLevel: 0,
        timestamp: 1606894427, // 2 December 2020
        title: '',
        type: TYPE.RISK_CHECK
      },
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [
          { timestamp: 1606808507, keys: 11, exposures: 12 },
          { timestamp: 1606804427, keys: 15, exposures: 16 }
        ],
        riskLevel: 0,
        timestamp: 1606808507, // 1 December 2020
        title: '',
        type: TYPE.RISK_CHECK
      }
    ]);
  });
  it('should prepare activities when risk checks received but other type exists in the same day', () => {
    const notifications = undefined;
    const activities = [
      createActivity({
        timestamp: 1607060028, // 4 December 2020
        type: TYPE.NOTIFICATION,
        content: 'content1',
        title: 'title1'
      }),
      createActivity({
        riskChecks: [
          { keys: 1345, exposures: 0, timestamp: 1607060027 },
          { keys: 1222, exposures: 1, timestamp: 1607060026 }
        ],
        timestamp: 1607060027, // 4 December 2020
        type: TYPE.RISK_CHECK
      })
    ];
    const riskChecks = [
      createNativeRiskCheck(1345, 0, 1607063626), // 4 December 2020
      createNativeRiskCheck(1222, 1, 1607063627) // 4 December 2020
    ];
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [
          { timestamp: 1607063627, keys: 1222, exposures: 1 },
          { timestamp: 1607063626, keys: 1345, exposures: 0 },
          { timestamp: 1607060027, keys: 1345, exposures: 0 },
          { timestamp: 1607060026, keys: 1222, exposures: 1 }
        ],
        riskLevel: 0,
        timestamp: 1607063627, // 4 December 2020
        title: '',
        type: TYPE.RISK_CHECK
      },
      {
        content: 'content1',
        id: expect.any(String),
        isRead: false,
        riskChecks: [],
        riskLevel: 0,
        timestamp: 1607060028, // 4 December 2020
        title: 'title1',
        type: TYPE.NOTIFICATION
      }
    ]);
  });
  it('should prepare activities when risk checks received but existing were read', () => {
    const notifications = undefined;
    const activities = [
      createActivity({
        riskChecks: [
          { keys: 1345, exposures: 0, timestamp: 1607060027 },
          { keys: 1222, exposures: 1, timestamp: 1607060026 }
        ],
        timestamp: 1607060027, // 4 December 2020
        type: TYPE.RISK_CHECK,
        isRead: true
      })
    ];
    const riskChecks = [
      createNativeRiskCheck(1222, 1, 1607063627) // 4 December 2020
    ];
    const exposures = undefined;

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures);
    expect(preparedActivities).toEqual([
      {
        content: '',
        id: expect.any(String),
        isRead: false,
        riskChecks: [
          { timestamp: 1607063627, keys: 1222, exposures: 1 },
          { timestamp: 1607060027, keys: 1345, exposures: 0 },
          { timestamp: 1607060026, keys: 1222, exposures: 1 }
        ],
        riskLevel: 0,
        timestamp: 1607063627, // 4 December 2020
        title: '',
        type: TYPE.RISK_CHECK
      }
    ]);
  });
  it('should skip activities when some exist', () => {
    const notification1Id = v4();
    const notification2Id = v4();
    const riskCheckId = v4();
    const exposureId = v4();
    const fetchedIds = {
      notifications: [notification1Id, notification2Id],
      riskChecks: [riskCheckId],
      exposures: [exposureId]
    };
    const notifications = [
      createNativeNotification('title1', 'content1', 6789, notification1Id),
      createNativeNotification('title2', 'content2', 333, notification2Id)
    ];
    const activities = [];
    const riskChecks = [
      createNativeRiskCheck(1222, 1, 1607063627, riskCheckId) // 4 December 2020
    ];
    const exposures = [createNativeExposures(1, 5000, exposureId)];

    const preparedActivities = prepareActivities(activities, notifications, riskChecks, exposures, fetchedIds);
    expect(preparedActivities).toEqual([]);
  });
});

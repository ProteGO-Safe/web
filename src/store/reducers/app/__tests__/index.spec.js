import createUploadHistoricalDataState from '../app.helpers';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from '../app.constants';

const mockNowDate = timestamp => {
  const mockDate = new Date(timestamp);
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
};

describe('create UploadHistoricalDataState for empty unsuccessfulAttempts', () => {
  it('should create UploadHistoricalDataState for native result 1', () => {
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: []
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.SUCCESS,
      unsuccessfulAttempts: []
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(1, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });

  it('should create UploadHistoricalDataState for native result 2', () => {
    mockNowDate(1601961964991);
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: []
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.FAILED,
      unsuccessfulAttempts: [1601961964991],
      errorMessageVisible: true
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(2, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });

  it('should create UploadHistoricalDataState for native result 3', () => {
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: []
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.EMPTY,
      unsuccessfulAttempts: [],
      errorMessageVisible: true
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(3, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });

  it('should create UploadHistoricalDataState for native result 4', () => {
    mockNowDate(1601961964991);
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: []
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.FAILED,
      unsuccessfulAttempts: [1601961964991],
      errorMessageVisible: true
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(4, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });

  it('should create UploadHistoricalDataState for native result 5', () => {
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: []
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.DENIED,
      unsuccessfulAttempts: [],
      errorMessageVisible: true
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(5, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });
});

describe('create UploadHistoricalDataState for not empty unsuccessfulAttempts', () => {
  it('should create UploadHistoricalDataState for native result 1', () => {
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: [1601961964990]
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.SUCCESS,
      unsuccessfulAttempts: []
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(1, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });

  it('should create UploadHistoricalDataState for native result 2', () => {
    mockNowDate(1601961964991);
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: [1601961964990]
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.FAILED,
      unsuccessfulAttempts: [1601961964990, 1601961964991],
      errorMessageVisible: true
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(2, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });

  it('should create UploadHistoricalDataState for native result 3', () => {
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: [1601961964990]
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.EMPTY,
      unsuccessfulAttempts: [1601961964990],
      errorMessageVisible: true
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(3, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });

  it('should create UploadHistoricalDataState for native result 4', () => {
    mockNowDate(1601961964991);
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: [1601961964990]
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.FAILED,
      unsuccessfulAttempts: [1601961964990, 1601961964991],
      errorMessageVisible: true
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(4, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });

  it('should create UploadHistoricalDataState for native result 5', () => {
    const state = {
      uploadHistoricalDataState: {
        unsuccessfulAttempts: [1601961964990]
      }
    };

    const expectedUploadHistoricalDataState = {
      status: uploadState.DENIED,
      unsuccessfulAttempts: [1601961964990],
      errorMessageVisible: true
    };

    const uploadHistoricalDataState = createUploadHistoricalDataState(5, state);
    expect(uploadHistoricalDataState).toEqual(
      expectedUploadHistoricalDataState
    );
  });
});

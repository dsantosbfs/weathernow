import {
  NairobiRequest,
  NairobiSuccess,
  NairobiFailure,
} from './nairobi.actions';

describe('NairobiActions', () => {
  it('should create NairobiRequest action', () => {
    const action = NairobiRequest();

    expect(action).toEqual({
      type: '[Nairobi] Request'
    });
  });

  it('should create NairobiSuccess action', () => {
    const payload = {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      updated_at: 0,
    };
    const action = NairobiSuccess(payload);

    expect(action).toEqual({
      type: '[Nairobi] Success',
      ...payload
    });
  });

  it('should create NairobiFailure action', () => {
    const payload = {
      test: true,
    };
    const action = NairobiFailure(payload);

    expect(action).toEqual({
      type: '[Nairobi] Failure',
      ...payload
    });
  });
});

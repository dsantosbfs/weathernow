import {
  UrubiciRequest,
  UrubiciSuccess,
  UrubiciFailure,
} from './urubici.actions';

describe('UrubiciActions', () => {
  it('should create UrubiciRequest action', () => {
    const action = UrubiciRequest();

    expect(action).toEqual({
      type: '[Urubici] Request'
    });
  });

  it('should create UrubiciSuccess action', () => {
    const payload = {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      updated_at: 0,
    };
    const action = UrubiciSuccess(payload);

    expect(action).toEqual({
      type: '[Urubici] Success',
      ...payload
    });
  });

  it('should create UrubiciFailure action', () => {
    const payload = {
      test: true,
    };
    const action = UrubiciFailure(payload);

    expect(action).toEqual({
      type: '[Urubici] Failure',
      ...payload
    });
  });
});

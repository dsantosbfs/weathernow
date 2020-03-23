import {
  NuukRequest,
  NuukSuccess,
  NuukFailure,
} from './nuuk.actions';

describe('NuukActions', () => {
  it('should create NuukRequest action', () => {
    const action = NuukRequest();

    expect(action).toEqual({
      type: '[Nuuk] Request'
    });
  });

  it('should create NuukSuccess action', () => {
    const payload = {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      updated_at: 0,
    };
    const action = NuukSuccess(payload);

    expect(action).toEqual({
      type: '[Nuuk] Success',
      ...payload
    });
  });

  it('should create NuukFailure action', () => {
    const payload = {
      test: true,
    };
    const action = NuukFailure(payload);

    expect(action).toEqual({
      type: '[Nuuk] Failure',
      ...payload
    });
  });
});

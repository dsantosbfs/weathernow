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
      test: true,
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

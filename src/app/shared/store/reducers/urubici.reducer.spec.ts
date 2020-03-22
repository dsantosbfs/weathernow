import * as fromReducer from './urubici.reducer';
import * as fromAction from '../actions/urubici.actions';

describe('UrubiciReducer', () => {
  it('should returns the Urubici request state', () => {
    const action = fromAction.UrubiciRequest();
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      loading: true
    });
  });

  it('should returns the Urubici success state', () => {
    const params = {
      test: true
    };
    const action = fromAction.UrubiciSuccess(params);
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      data: {
        ...params,
        type: '[Urubici] Success'
      }
    });
  });

  it('should returns the Urubici failure state', () => {
    const params = {
      test: true
    };
    const action = fromAction.UrubiciFailure(params);
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      error: {
        ...params,
        type: '[Urubici] Failure'
      }
    });
  });
});

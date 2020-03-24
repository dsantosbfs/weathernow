import * as fromAction from '../actions/urubici.actions';
import * as fromReducer from './urubici.reducer';

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
      feels_like: 18.66,
      humidity: 88,
      pressure: 1022,
      temp: 18,
      temp_max: 20,
      temp_min: 16.11,
      updated_at: 1584997727730,
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

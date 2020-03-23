import * as fromReducer from './nuuk.reducer';
import * as fromAction from '../actions/nuuk.actions';

describe('NuukReducer', () => {
  it('should returns the Nuuk request state', () => {
    const action = fromAction.NuukRequest();
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      loading: true
    });
  });

  it('should returns the Nuuk success state', () => {
    const params = {
      temp: 18,
      feels_like: 18.66,
      temp_min: 16.11,
      temp_max: 20,
      pressure: 1022,
      humidity: 88,
      updated_at: 1584997727730,
    };
    const action = fromAction.NuukSuccess(params);
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      data: {
        ...params,
        type: '[Nuuk] Success'
      }
    });
  });

  it('should returns the Nuuk failure state', () => {
    const params = {
      test: true
    };
    const action = fromAction.NuukFailure(params);
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      error: {
        ...params,
        type: '[Nuuk] Failure'
      }
    });
  });
});

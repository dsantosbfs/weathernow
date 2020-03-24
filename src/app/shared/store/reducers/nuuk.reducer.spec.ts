import * as fromAction from '../actions/nuuk.actions';
import * as fromReducer from './nuuk.reducer';

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
      feels_like: 18.66,
      humidity: 88,
      pressure: 1022,
      temp: 18,
      temp_max: 20,
      temp_min: 16.11,
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

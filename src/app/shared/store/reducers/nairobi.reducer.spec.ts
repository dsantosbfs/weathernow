import * as fromReducer from './nairobi.reducer';
import * as fromAction from '../actions/nairobi.actions';

describe('NairobiReducer', () => {
  it('should returns the Nairobi request state', () => {
    const action = fromAction.NairobiRequest();
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      loading: true
    });
  });

  it('should returns the Nairobi success state', () => {
    const params = {
      temp: 18,
      feels_like: 18.66,
      temp_min: 16.11,
      temp_max: 20,
      pressure: 1022,
      humidity: 88,
      updated_at: 1584997727730,
    };
    const action = fromAction.NairobiSuccess(params);
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      data: {
        ...params,
        type: '[Nairobi] Success'
      }
    });
  });

  it('should returns the Nairobi failure state', () => {
    const params = {
      test: true
    };
    const action = fromAction.NairobiFailure(params);
    const state = fromReducer.reducer(undefined, action);

    expect({ ...(state) as {} }).toEqual({
      ...fromReducer.initialState,
      error: {
        ...params,
        type: '[Nairobi] Failure'
      }
    });
  });
});

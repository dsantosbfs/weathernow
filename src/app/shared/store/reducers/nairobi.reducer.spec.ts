import * as fromAction from '../actions/nairobi.actions';
import * as fromReducer from './nairobi.reducer';

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
      feels_like: 18.66,
      humidity: 88,
      pressure: 1022,
      temp: 18,
      temp_max: 20,
      temp_min: 16.11,
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

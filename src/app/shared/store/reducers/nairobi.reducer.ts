import { createReducer, on } from '@ngrx/store';

import {
  NairobiFailure,
  NairobiRequest,
  NairobiSuccess,
} from '../actions/nairobi.actions';
import { WeatherStateInterface } from '../../interfaces/weather-state.interface';

export const initialState: WeatherStateInterface = {
  data: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    updated_at: 0,
  },
  error: null,
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(NairobiFailure, (state, payload) => ({
    ...initialState,
    error: payload
  })),
  on(NairobiRequest, (state, payload) => ({
    ...initialState,
    loading: true
  })),
  on(NairobiSuccess, (state, payload) => ({
    ...initialState,
    data: payload
  }))
);

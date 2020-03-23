import { createReducer, on } from '@ngrx/store';

import {
  UrubiciFailure,
  UrubiciRequest,
  UrubiciSuccess,
} from '../actions/urubici.actions';
import { WeatherStateInterface } from '../../interfaces/weather-state.interface';

export const initialState: WeatherStateInterface = {
  data: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    updated_at: 0,
  },
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(UrubiciRequest, (state, payload) => ({
    ...initialState,
    loading: true
  })),
  on(UrubiciSuccess, (state, payload) => ({
    ...initialState,
    data: payload,
  })),
  on(UrubiciFailure, (state, payload) => ({
    ...initialState,
    error: payload,
  }))
);

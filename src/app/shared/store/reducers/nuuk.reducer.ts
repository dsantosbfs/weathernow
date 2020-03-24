import { createReducer, on } from '@ngrx/store';

import {
  NuukFailure,
  NuukRequest,
  NuukSuccess,
} from '../actions/nuuk.actions';
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
  on(NuukFailure, (state, payload) => ({
    ...initialState,
    error: payload
  })),
  on(NuukRequest, (state, payload) => ({
    ...initialState,
    loading: true
  })),
  on(NuukSuccess, (state, payload) => ({
    ...initialState,
    data: payload
  }))
);

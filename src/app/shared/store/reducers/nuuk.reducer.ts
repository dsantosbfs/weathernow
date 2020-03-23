import { createReducer, on } from '@ngrx/store';

import {
  NuukFailure,
  NuukRequest,
  NuukSuccess,
} from '../actions/nuuk.actions';

export const initialState = {
  data: null,
  error: null,
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(NuukRequest, (state, payload) => ({
    ...initialState,
    loading: true
  })),
  on(NuukSuccess, (state, payload) => ({
    ...initialState,
    data: payload,
  })),
  on(NuukFailure, (state, payload) => ({
    ...initialState,
    error: payload
  }))
);

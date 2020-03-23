import { createReducer, on } from '@ngrx/store';

import {
  NairobiFailure,
  NairobiRequest,
  NairobiSuccess,
} from '../actions/nairobi.actions';

export const initialState = {
  data: null,
  error: null,
  loading: false,
  updated_at: null,
};

export const reducer = createReducer(
  initialState,
  on(NairobiRequest, (state, payload) => ({
    ...initialState,
    loading: true
  })),
  on(NairobiSuccess, (state, payload) => ({
    ...initialState,
    data: payload,
    updated_at: new Date().getTime(),
  })),
  on(NairobiFailure, (state, payload) => ({
    ...initialState,
    error: payload,
    updated_at: new Date().getTime(),
  }))
);

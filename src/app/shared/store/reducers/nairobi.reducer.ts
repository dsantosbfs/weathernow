import { createReducer, on } from '@ngrx/store';

import {
  NairobiFailure,
  NairobiRequest,
  NairobiSuccess,
} from '../actions/nairobi.actions';

export const initialState = {
  data: null,
  error: null,
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(NairobiRequest, (state, payload) => ({
    ...initialState,
    loading: true
  })),
  on(NairobiSuccess, (state, payload) => ({
    ...initialState,
    data: payload
  })),
  on(NairobiFailure, (state, payload) => ({
    ...initialState,
    error: payload
  }))
);

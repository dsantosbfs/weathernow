import { createReducer, on } from '@ngrx/store';

import {
  UrubiciFailure,
  UrubiciRequest,
  UrubiciSuccess,
} from '../actions/urubici.actions';

export const initialState = {
  data: null,
  error: null,
  loading: false,
  updated_at: null,
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
    updated_at: new Date().getTime(),
  })),
  on(UrubiciFailure, (state, payload) => ({
    ...initialState,
    error: payload,
    updated_at: new Date().getTime(),
  }))
);

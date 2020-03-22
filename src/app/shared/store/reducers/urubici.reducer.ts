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

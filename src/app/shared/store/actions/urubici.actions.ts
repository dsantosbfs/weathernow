import { createAction } from '@ngrx/store';

export const UrubiciRequest = createAction(
  '[Urubici] Request'
);

export const UrubiciSuccess = createAction(
  '[Urubici] Success',
  (payload: any) => (payload)
);

export const UrubiciFailure = createAction(
  '[Urubici] Failure',
  (payload: any) => (payload)
);

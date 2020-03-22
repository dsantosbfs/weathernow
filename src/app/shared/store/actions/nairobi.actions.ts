import { createAction } from '@ngrx/store';

export const NairobiRequest = createAction(
  '[Nairobi] Request'
);

export const NairobiSuccess = createAction(
  '[Nairobi] Success',
  (payload: any) => (payload)
);

export const NairobiFailure = createAction(
  '[Nairobi] Failure',
  (payload: any) => (payload)
);

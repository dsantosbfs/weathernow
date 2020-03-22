import { createAction } from '@ngrx/store';

export const NuukRequest = createAction(
  '[Nuuk] Request'
);

export const NuukSuccess = createAction(
  '[Nuuk] Success',
  (payload: any) => (payload)
);

export const NuukFailure = createAction(
  '[Nuuk] Failure',
  (payload: any) => (payload)
);

import { createAction } from '@ngrx/store';

import { WeatherInterface } from '../../interfaces/weather-state.interface';

export const NairobiFailure = createAction(
  '[Nairobi] Failure',
  (payload: any) => (payload)
);

export const NairobiRequest = createAction(
  '[Nairobi] Request'
);

export const NairobiSuccess = createAction(
  '[Nairobi] Success',
  (payload: WeatherInterface) => (payload)
);

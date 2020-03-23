import { createAction } from '@ngrx/store';

import { WeatherInterface } from '../../interfaces/weather-state.interface';

export const NuukRequest = createAction(
  '[Nuuk] Request'
);

export const NuukSuccess = createAction(
  '[Nuuk] Success',
  (payload: WeatherInterface) => (payload)
);

export const NuukFailure = createAction(
  '[Nuuk] Failure',
  (payload: any) => (payload)
);

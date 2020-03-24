import { createAction } from '@ngrx/store';

import { WeatherInterface } from '../../interfaces/weather-state.interface';

export const UrubiciFailure = createAction(
  '[Urubici] Failure',
  (payload: any) => (payload)
);

export const UrubiciRequest = createAction(
  '[Urubici] Request'
);

export const UrubiciSuccess = createAction(
  '[Urubici] Success',
  (payload: WeatherInterface) => (payload)
);

import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import * as fromNuuk from './nuuk.reducer';
import * as fromUrubici from './urubici.reducer';
import * as fromNairobi from './nairobi.reducer';

import { environment } from '../../../../environments/environment';

import { WeatherStateInterface } from '../../interfaces/weather-state.interface';

export interface State {
  nuuk: WeatherStateInterface;
  urubici: WeatherStateInterface;
  nairobi: WeatherStateInterface;
}

export function logger(reducer: ActionReducer<State>): any  {
  return storeLogger({
    filter: {
      blacklist: [
        '@ngrx/store/update-reducers',
        '@ngrx/effects/init'
      ]
    }
  })(reducer);
}

export const reducers: ActionReducerMap<State> = {
  nairobi: fromNairobi.reducer,
  nuuk: fromNuuk.reducer,
  urubici: fromUrubici.reducer,
};

export const metaReducers = environment.production ? [] : [logger];

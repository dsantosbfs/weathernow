import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { WeatherService } from './../../services/weather.service';

import { WeatherLoad } from '../actions/weather.actions';
import { NuukRequest, NuukSuccess } from './../actions/nuuk.actions';
import { UrubiciRequest, UrubiciSuccess } from './../actions/urubici.actions';
import { NairobiRequest, NairobiSuccess } from './../actions/nairobi.actions';

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private service: WeatherService,
  ) {}

  @Effect() WeatherLoad$ = this.actions$.pipe(
    ofType(WeatherLoad),
    switchMap(() => [
      NairobiRequest(),
      NuukRequest(),
      UrubiciRequest(),
    ])
  );

  @Effect() NuukRequest$ = this.actions$.pipe(
    ofType(NuukRequest),
    switchMap(() => this.service.getNuukWeather().pipe(
      map(payload => NuukSuccess(payload)),
    ))
  );

  @Effect() UrubiciRequest$ = this.actions$.pipe(
    ofType(UrubiciRequest),
    switchMap(() => this.service.getUrubiciWeather().pipe(
      map(payload => UrubiciSuccess(payload)),
    ))
  );

  @Effect() NairobiRequest$ = this.actions$.pipe(
    ofType(NairobiRequest),
    switchMap(() => this.service.getNairobiWeather().pipe(
      map(payload => NairobiSuccess(payload)),
    ))
  );
}

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap, catchError } from 'rxjs/operators';

import { WeatherService } from './../../services/weather.service';

import { WeatherLoad } from '../actions/weather.actions';
import { NuukRequest, NuukSuccess, NuukFailure } from './../actions/nuuk.actions';
import { UrubiciRequest, UrubiciSuccess, UrubiciFailure } from './../actions/urubici.actions';
import { NairobiRequest, NairobiSuccess, NairobiFailure } from './../actions/nairobi.actions';
import { of } from 'rxjs';

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

  @Effect() NairobiRequest$ = this.actions$.pipe(
    ofType(NairobiRequest),
    switchMap(() => this.service.getNairobiWeather().pipe(
      map(payload => NairobiSuccess(payload)),
      catchError(data => of(NairobiFailure(data)))
    ))
  );

  @Effect() NuukRequest$ = this.actions$.pipe(
    ofType(NuukRequest),
    switchMap(() => this.service.getNuukWeather().pipe(
      map(payload => NuukSuccess(payload)),
      catchError(data => of(NuukFailure(data)))
    ))
  );

  @Effect() UrubiciRequest$ = this.actions$.pipe(
    ofType(UrubiciRequest),
    switchMap(() => this.service.getUrubiciWeather().pipe(
      map(payload => UrubiciSuccess(payload)),
      catchError(data => of(UrubiciFailure(data)))
    ))
  );
}

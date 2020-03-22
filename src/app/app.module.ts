import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WeatherService } from './shared/services/weather.service';
import { NgrxActionsModule } from 'ngrx-typed-actions';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app.container';
import { AppEffects } from './shared/store/effects/app.effects';
import { CardModule, ButtonModule, DataLabelModule } from 'weather-lib';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './shared/store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    DataLabelModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      name: 'Weather Now - Store'
    }),
    EffectsModule.forRoot([
      AppEffects
    ]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        // strictStateSerializability: true,
        // strictActionSerializability: true,
      }
    }),
    NgrxActionsModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppContainer]
})
export class AppModule { }

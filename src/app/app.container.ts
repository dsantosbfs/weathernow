import { Component, OnInit } from '@angular/core';
import { Select } from 'ngrx-typed-actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { NairobiRequest } from './shared/store/actions/nairobi.actions';
import { NuukRequest } from './shared/store/actions/nuuk.actions';
import { UrubiciRequest } from './shared/store/actions/urubici.actions';
import { WeatherLoad } from './shared/store/actions/weather.actions';

@Component({
  selector: 'app-root',
  template: `<app-component
    [nairobi$]="nairobi$ | async"
    [nuuk$]="nuuk$ | async"
    [urubici$]="urubici$ | async"
    ($retry)="onRetry($event)"
  ></app-component>`
})
export class AppContainerComponent implements OnInit {
  @Select('nuuk')
    nuuk$: Observable<any>;
  @Select('urubici')
    urubici$: Observable<any>;
  @Select('nairobi')
    nairobi$: Observable<any>;

  constructor(
    private store: Store<any>,
  ) {}

  ngOnInit(): void {
    this.updateWeather();

    setInterval(() => {
      this.updateWeather();
    }, 600000); // 10 min
  }

  public updateWeather() {
    this.store.dispatch(WeatherLoad());
  }

  public onRetry(cityCode): void {
    switch (cityCode) {
      case 'Nuuk':
        this.store.dispatch(NuukRequest());
        return;
      case 'Urubici':
        this.store.dispatch(UrubiciRequest());
        return;
      case 'Nairobi':
          this.store.dispatch(NairobiRequest());
          return;
    }
  }
}

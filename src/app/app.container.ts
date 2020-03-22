import { Component, OnInit } from '@angular/core';
import { Select } from 'ngrx-typed-actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { WeatherLoad } from './shared/store/actions/weather.actions';

@Component({
  selector: 'app-root',
  template: `<app-component
    [nairobi$]="nairobi$ | async"
    [nuuk$]="nuuk$ | async"
    [urubici$]="urubici$ | async"
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

  private updateWeather() {
    this.store.dispatch(WeatherLoad());
  }
}

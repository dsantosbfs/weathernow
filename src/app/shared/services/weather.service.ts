import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from './base.service';
import { WeatherInterface } from '../interfaces/weather-state.interface';

@Injectable()
export class WeatherService extends BaseService {

  private url() {
    return '/weather';
  }

  public temperatureTransform(data) {
    return {
      ...data,
      temp: parseInt(data.temp, 10),
      updated_at: new Date().getTime(),
    };
  }

  public getNuukWeather(): Observable<WeatherInterface> {
    return this.get(`${this.url()}`, {
      q: 'Nuuk,GL',
      units: 'metric'
    }).pipe(
      map(data => this.temperatureTransform(data.main))
    );
  }

  public getUrubiciWeather(): Observable<WeatherInterface> {
    return this.get(`${this.url()}`, {
      q: 'Urubici,BR',
      units: 'metric'
    }).pipe(
      map(data => this.temperatureTransform(data.main))
    );
  }

  public getNairobiWeather(): Observable<WeatherInterface> {
    return this.get(`${this.url()}`, {
      q: 'Nairobi,KE',
      units: 'metric'
    }).pipe(
      map(data => this.temperatureTransform(data.main))
    );
  }
}

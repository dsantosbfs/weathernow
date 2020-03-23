import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from './base.service';

@Injectable()
export class WeatherService extends BaseService {

  private url() {
    return '/weather';
  }

  public temperatureTransform(data) {
    return {
        ...data,
        temp: parseInt(data.temp, 10),
    };
  }

  public getNuukWeather(): Observable<any> {
    return this.get(`${this.url()}`, {
      q: 'Nuuk,GL',
      units: 'metric'
    }).pipe(
      map(data => this.temperatureTransform(data.main))
    );
  }

  public getUrubiciWeather(): Observable<any> {
    return this.get(`${this.url()}`, {
      q: 'Urubici,BR',
      units: 'metric'
    }).pipe(
      map(data => this.temperatureTransform(data.main))
    );
  }

  public getNairobiWeather(): Observable<any> {
    return this.get(`${this.url()}`, {
      q: 'Nairobi,KE',
      units: 'metric'
    }).pipe(
      map(data => this.temperatureTransform(data.main))
    );
  }
}

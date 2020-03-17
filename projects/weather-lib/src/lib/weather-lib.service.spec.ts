import { TestBed } from '@angular/core/testing';

import { WeatherLibService } from './weather-lib.service';

describe('WeatherLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherLibService = TestBed.get(WeatherLibService);
    expect(service).toBeTruthy();
  });
});

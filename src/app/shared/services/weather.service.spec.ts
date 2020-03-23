import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Store } from 'ngrx-typed-actions';
import { StoreModule } from '@ngrx/store';
import { TestBed, async, inject } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  const baseUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherService,
      ],
      imports: [
        StoreModule.forRoot({}, {}),
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('should get urubici weather',
    async(
      inject([
        HttpTestingController,
        WeatherService
      ],
      (httpMock: HttpTestingController, service: WeatherService) => {
        const mockResponse = {
          coord: {
            lon: -0.13,
            lat: 51.51
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n'
            }
          ],
          base: 'stations',
          main: {
            temp: 4.75,
            feels_like: -1.12,
            temp_min: 3.33,
            temp_max: 6.11,
            pressure: 1028,
            humidity: 75
          },
          visibility: 10000,
          wind: {
            speed: 5.7,
            deg: 60
          },
          clouds: {
            all: 75
          },
          dt: 1584757396,
          sys: {
            type: 1,
            id: 1414,
            country: 'GB',
            sunrise: 1584770407,
            sunset: 1584814500
          },
          timezone: 0,
          id: 2643743,
          name: 'London',
          cod: 200
        };

        service.getUrubiciWeather().subscribe(data => {
          expect(data.temp).toBe(4);
        });

        const requestMock = httpMock.expectOne({
          url: `${baseUrl}/weather?q=Urubici,BR&units=metric&appid=d1398fc9fadc143c7dc78f13d8d0914b`,
          method: 'GET'
        });

        requestMock.flush(mockResponse);
  })));

  it('should get nairobi weather',
    async(
      inject([
        HttpTestingController,
        WeatherService
      ],
      (httpMock: HttpTestingController, service: WeatherService) => {
        const mockResponse = {
          coord: {
            lon: -0.13,
            lat: 51.51
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n'
            }
          ],
          base: 'stations',
          main: {
            temp: 4.75,
            feels_like: -1.12,
            temp_min: 3.33,
            temp_max: 6.11,
            pressure: 1028,
            humidity: 75
          },
          visibility: 10000,
          wind: {
            speed: 5.7,
            deg: 60
          },
          clouds: {
            all: 75
          },
          dt: 1584757396,
          sys: {
            type: 1,
            id: 1414,
            country: 'GB',
            sunrise: 1584770407,
            sunset: 1584814500
          },
          timezone: 0,
          id: 2643743,
          name: 'London',
          cod: 200
        };

        service.getNairobiWeather().subscribe(data => {
          expect(data.temp).toBe(4);
        });

        const requestMock = httpMock.expectOne({
          url: `${baseUrl}/weather?q=Nairobi,KE&units=metric&appid=d1398fc9fadc143c7dc78f13d8d0914b`,
          method: 'GET'
        });

        requestMock.flush(mockResponse);
  })));

  it('should get nuuk weather',
    async(
      inject([
        HttpTestingController,
        WeatherService
      ],
      (httpMock: HttpTestingController, service: WeatherService) => {
        const mockResponse = {
          coord: {
            lon: -0.13,
            lat: 51.51
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n'
            }
          ],
          base: 'stations',
          main: {
            temp: 4.75,
            feels_like: -1.12,
            temp_min: 3.33,
            temp_max: 6.11,
            pressure: 1028,
            humidity: 75
          },
          visibility: 10000,
          wind: {
            speed: 5.7,
            deg: 60
          },
          clouds: {
            all: 75
          },
          dt: 1584757396,
          sys: {
            type: 1,
            id: 1414,
            country: 'GB',
            sunrise: 1584770407,
            sunset: 1584814500
          },
          timezone: 0,
          id: 2643743,
          name: 'London',
          cod: 200
        };

        service.getNuukWeather().subscribe(data => {
          expect(data.temp).toBe(4);
        });

        const requestMock = httpMock.expectOne({
          url: `${baseUrl}/weather?q=Nuuk,GL&units=metric&appid=d1398fc9fadc143c7dc78f13d8d0914b`,
          method: 'GET'
        });

        requestMock.flush(mockResponse);
  })));
});

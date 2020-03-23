import { BaseService } from './base.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';

import { environment } from '../../../environments/environment';

describe('BaseService', () => {
  const baseUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseService
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ]
    });
  });

  it('should be created', inject([BaseService], (service: BaseService) => {
    expect(service).toBeTruthy();
  }));

  it('should make a GET success request without query parameters',
    async(
      inject([
        HttpTestingController,
        BaseService
      ],
      (httpMock: HttpTestingController, service: BaseService) => {
        const mockResponse = {
          status: 200,
          statusText: 'Ok',
          ok: true,
        };

        service.get('/test').subscribe(data => {
          expect(data).toBe(mockResponse);
        });

        const requestMock = httpMock.expectOne({
          url: `${baseUrl}/test?appid=d1398fc9fadc143c7dc78f13d8d0914b`,
          method: 'GET'
        });

        requestMock.flush(mockResponse);
  })));

  it('should make a GET success request',
    async(
      inject([
        HttpTestingController,
        BaseService
      ],
      (httpMock: HttpTestingController, service: BaseService) => {
        const mockResponse = {
          status: 200,
          statusText: 'Ok',
          ok: true,
        };

        service.get('/weather', {
          q: 'Urubici,BR',
          units: 'metric'
        }).subscribe(data => {
          expect(data).toBe(mockResponse);
        });

        const requestMock = httpMock.expectOne({
          url: `${baseUrl}/weather?q=Urubici,BR&units=metric&appid=d1398fc9fadc143c7dc78f13d8d0914b`,
          method: 'GET'
        });

        requestMock.flush(mockResponse);
  })));

  it('should make a GET falied request',
    async(
      inject([
        HttpTestingController,
        BaseService
      ],
      (httpMock: HttpTestingController, service: BaseService) => {
        const mockResponse = {
          status: 500,
          statusText: 'Error',
          ok: false,
        };

        service.get('/weather', {
          q: 'Urubici,BR',
          units: 'metric'
        }).subscribe(() => {}, error => {
          expect(error.statusText).toBe(mockResponse.statusText);
        });

        const requestMock = httpMock.expectOne({
          url: `${baseUrl}/weather?q=Urubici,BR&units=metric&appid=d1398fc9fadc143c7dc78f13d8d0914b`,
          method: 'GET'
        });

        requestMock.flush(null, mockResponse);
  })));
});

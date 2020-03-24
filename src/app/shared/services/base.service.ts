import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class BaseService {
  protected baseUrl: string;
  protected clientId: string;

  constructor(
    protected http: HttpClient,
  ) {
    this.baseUrl = environment.apiUrl;
    this.clientId = environment.clientId;
  }

  public get(path: string, queryString = {}): Observable<any> {
    const headers = new HttpHeaders();
    const params = {
      ...queryString,
      appid: this.clientId
    };

    headers.append('x-requested-with', 'xhr');

    return this.http.get(`${this.baseUrl}${path}`, {
      params,
      headers
    }).pipe(
      map((response: HttpResponse<any>) => response),
      catchError(error => throwError(error))
    );
  }
}

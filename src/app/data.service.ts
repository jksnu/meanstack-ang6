import { Injectable } from '@angular/core';
//import {Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DataService {

  result: any;

  constructor(private _httpClient: HttpClient) { }

  getUsers(){
    return this._httpClient.get('/api/users')
      .pipe(map(result => this.result = result));
  }

}

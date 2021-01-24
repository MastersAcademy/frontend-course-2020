import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {Response} from '../models/response.model';
import {ParamsModel} from "../models/params.model";


@Injectable()
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';
  loader: boolean = true;

  constructor(private http: HttpClient) {
  }

  getUsers(params:ParamsModel): Observable<Response> {
    return this.http.get<Response>(this.ROOT_URL, params).pipe(
      map((res) => res))
  }

  hideLoader(): void {
    this.loader = false;
  }
}

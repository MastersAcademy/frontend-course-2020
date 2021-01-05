import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Page} from '../models';

@Injectable()
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(params: HttpParams): Observable<Page> {
    return this.httpClient.get<Page>(this.ROOT_URL, {params});
  }
}

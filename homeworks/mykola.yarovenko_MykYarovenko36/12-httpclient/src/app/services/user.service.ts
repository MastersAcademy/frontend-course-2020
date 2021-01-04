import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DefaultUsersPage } from '../models/users-page';


@Injectable({providedIn: 'root'})
export class UserServise {
  unsubscribe() {
    throw new Error('Method not implemented.');
  }
  ROOT_URL = 'https://reqres.in/api/users';

  constructor(
      private http: HttpClient,
    ) {}

  getUsers(options: any):Observable<any> {
      return this.http.get<DefaultUsersPage>(this.ROOT_URL, options);
  }
}

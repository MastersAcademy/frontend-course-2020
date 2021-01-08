import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';

@Injectable({providedIn: 'root'})

export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';
  options = {
    params: {
      page: '1',
      per_page: '2',
      delay: '2'
    },
    headers: { Authorization: 'i2ojjfsoiejfs9' }
  };

  constructor(private http: HttpClient) { }

  getUsers(getPageId: string | number, usersPerPage: string | number): Observable<Page> {
    this.options.params.page = getPageId.toString();
    this.options.params.per_page = usersPerPage.toString();
    return this.http.get<Page>(this.ROOT_URL, this.options).pipe();
  }
}

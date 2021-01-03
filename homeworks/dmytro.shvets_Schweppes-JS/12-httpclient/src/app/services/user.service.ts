import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/Page';
import { Params } from '../models/Params';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';
  options = {
    params: { page: '1', per_page: '2' }
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Page> {
    return this.http.get<Page>(this.ROOT_URL, this.options);
  }

  changingPage(pageNumber: number): Params {
    return this.options.params = { page: pageNumber.toString(), per_page: '2' }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Page } from '../models/page.model';
import { UserRequestOptions } from '../models/user.requset.option';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';

  loader: boolean = true;

  constructor(private http: HttpClient) { }
    
  options = {
    params: {
      page: '1',
      per_page: '2',
    }
  }

  getUsers(options: UserRequestOptions): Observable<User[]> {
    return this.http.get<Page>(this.ROOT_URL, options).pipe(
      delay(1000),
      map(({ data }) => data),
    );
  }

  hideLoader(): void {
    this.loader = false;
  }
}

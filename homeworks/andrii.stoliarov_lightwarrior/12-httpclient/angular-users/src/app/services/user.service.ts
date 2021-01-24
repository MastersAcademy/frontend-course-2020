import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { UsersResponse } from '../interfaces/users-response';


@Injectable({ providedIn: 'root' })
export class UserService {
  ROOT_URL: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const options = {
      params: {per_page: '6'}
    };
    return this.http.get<UsersResponse>(this.ROOT_URL, options).pipe(
      map(({ data }) => data),
      delay(2000)
    );
  }

}

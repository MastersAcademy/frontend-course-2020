import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Page } from '../models/page.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';
  options = {
    headers: { 'accept-language': 'eng' }
  }

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get<Page>(this.ROOT_URL, this.options).pipe(
      delay(1000),
      map(({ data }) => data)

    );
  }
}

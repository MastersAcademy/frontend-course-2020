import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Page } from '../models/page.model';
import { UserRequestOptions } from '../models/user.requset.option';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';

  boolSubject: Subject<boolean>;
  myBool$: Observable<boolean>;
  
  constructor(private http: HttpClient) {
    this.boolSubject = new Subject<boolean>();
    this.myBool$ = this.boolSubject.asObservable();
   }

  getUsers(options: UserRequestOptions): Observable<User[]> {
    return this.http.get<Page>(this.ROOT_URL, options).pipe(
      map(({ data }) => data),
    );
  }
}

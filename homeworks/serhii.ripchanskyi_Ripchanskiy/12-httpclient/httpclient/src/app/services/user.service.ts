import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UsersPage } from "../models";
import { PageRequestParams } from "../models";

@Injectable()
export class UserService {
  USERS_API_URL = 'https://reqres.in/api/users';
  loader: boolean = true;

  constructor(private http: HttpClient) {}

  getUsers(params: PageRequestParams): Observable<UsersPage> {
    return this.http.get<UsersPage>(this.USERS_API_URL, params).pipe(
      map((page) => page)
    )
  }

  startLoader(): void {
    this.loader = true;
  }

  stopLoader(): void {
    this.loader = false;
  }

  getLoader(): boolean {
    return this.loader;
  }
}

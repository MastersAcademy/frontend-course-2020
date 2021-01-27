import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UsersPage} from "../models/users.page";
import {UserRequestOptions} from "../models/user.request.options";

@Injectable()
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';
  loading: boolean = true;

  constructor(private http: HttpClient) {
  }

  getUsers(options: UserRequestOptions): Observable<UsersPage> {
    this.loading = true;
    return this.http.get<UsersPage>(this.ROOT_URL, options).pipe(
      map((page) => page)
    )
  }

  stopLoader() {
    this.loading = false;
  }
}

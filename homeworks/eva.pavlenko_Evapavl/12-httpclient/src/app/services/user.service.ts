import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Page } from "../models/page.model";
import { map } from "rxjs/operators";
import { Options } from "../models/options.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(options: Options): Observable<Page> {
    return this.http.get<Page>(this.ROOT_URL, options)
      .pipe(
        map((data) => data)
      )
  }
}

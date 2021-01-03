import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  getUsers(usersPerPage: string, currentPage: string):Observable<any> {
    const options = {
      params: {
        page: currentPage,
        per_page: usersPerPage,
      }
    }
    return this.http.get<any>('https://reqres.in/api/users', options).pipe(
      tap((data: any) => console.log(data)),
    )
  }
}

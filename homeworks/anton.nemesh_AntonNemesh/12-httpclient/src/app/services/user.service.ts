import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  getUsers(usersPerPage: number, currentPage: number):Observable<any> {
    const options = {
      params: {
        page: `${currentPage}`,
        per_page: `${usersPerPage}`,
      }
    }
    return this.http.get('https://reqres.in/api/users', options);
  }
}

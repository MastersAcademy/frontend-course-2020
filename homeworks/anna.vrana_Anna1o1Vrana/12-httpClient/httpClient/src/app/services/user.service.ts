import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Page} from "../models/page.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

export class UserService {
  Root_URL = 'https://reqres.in/api/users';
  options = {
    params: { page: '1' },
    headers: { 'Alternates': 'new header https://reqres.in/api/users' }
  }

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]> {
    // const options = {
    //   params: new HttpParams().set('page', '1'),
    //   // headers: new Headers().append('new':'headers')
    //   // headers: { 'Option Header'}
    // }
    return this.http.get<Page>(this.Root_URL, this.options).pipe(
      map(({ data }) => data),
    );
  }


}

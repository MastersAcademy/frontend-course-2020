import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { User } from '../models/user.models';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  public getUsers(quantityCardsOfPage:number ,page:number): Observable<User[]> {
    const options = {
      params: {
        page: `${page}`,
        per_page: `${quantityCardsOfPage}`,
      }
    }

    return this.http.get<Page>(this.ROOT_URL,options).pipe(
      map(({ data }) => data),
    );
  }

  public getQuantityOfUsers(): Observable<Page>{
    return this.http.get<Page>(this.ROOT_URL)
  }
}

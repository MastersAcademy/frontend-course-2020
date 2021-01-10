import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from '../component/user/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class PageService {
  ROOT_URL = 'https://reqres.in/api/users';
  options = {
    params: { page: '1', per_page: '2' },
    headers: {
      'Accept-Language' : 'de'
    }
  }

  constructor(private http: HttpClient) {}

  getPage(): Observable<Page> {
    return this.http.get<Page>(this.ROOT_URL, this.options).pipe(
      map(( data ) => data)
    );
  }

  getPageWithTwoUsers(pageNumber): void{
    this.options.params.page = pageNumber;
  }
}

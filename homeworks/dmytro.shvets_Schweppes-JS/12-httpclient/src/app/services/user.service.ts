import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public ROOT_URL = 'https://reqres.in/api/users';
  public options = {
    params: { page: '1', per_page: '2' }
  }

  constructor(private http: HttpClient) { }

  getUsers(pageNumber: string): Observable<Page> {
    this.options.params.page = pageNumber;
    return this.http.get<Page>(this.ROOT_URL, this.options);
  }

  changingCardNumber(cardNumber: string): void {
    this.options.params.per_page = cardNumber;
  }
}

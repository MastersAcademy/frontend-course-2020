import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/Page';
import { Params } from '../models/Params';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public cardPerPage = 2;
  public ROOT_URL = 'https://reqres.in/api/users';
  public options = {
    params: { page: '1', per_page: '2' }
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Page> {
    return this.http.get<Page>(this.ROOT_URL, this.options);
  }

  changingPage(pageNumber: number): Params {
    return this.options.params = {
      page: pageNumber.toString(),
      per_page: this.options.params.per_page
    }
  }

  changingCardNumber(cardNumber: number): Params {
    return (
      this.cardPerPage = cardNumber,
      this.options.params = {
        page: this.options.params.page,
        per_page: cardNumber.toString()
      }
    )
  }
}

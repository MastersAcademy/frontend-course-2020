import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DefaultUsersPage } from '../models/users-page';
import { PageService } from './page.service';
import { PagePersonsService } from './per_page.service';


@Injectable()
export class UserServise {
    ROOT_URL = 'https://reqres.in/api/users';
    constructor(
      private readonly http: HttpClient,
      private pageService: PageService,
      private pagePersonsService: PagePersonsService,
    ) {}

    getUsers(): Observable<any> {
      let page = this.pageService.CurrentPage;
      let per_page = this.pagePersonsService.PagePersons;
      let options = {
        params : {
          page: `${page}`,
          per_page: `${per_page}`,
        }
      }
      return this.http.get<DefaultUsersPage>(this.ROOT_URL, options);
  }
}

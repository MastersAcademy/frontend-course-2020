import { Component, OnInit } from '@angular/core';

import {finalize} from "rxjs/operators";

import {UserService} from '../../services';
import {User} from '../../models/user.model';
import {Response} from "../../models/response.model";
import {ParamsModel} from '../../models/params.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  pages: number[] = [] ;
  currentPage: number | undefined;
  elementsOnPage: string[] = ['2', '6', '12'];
  queryParams: ParamsModel;
  loader: boolean = true;

  constructor(private userService: UserService) {
    this.queryParams = new ParamsModel();
  }

  ngOnInit(): void {
    this.queryParams.params.page = '1';
    this.queryParams.params.per_page = '2'
    this.getUsers(this.queryParams);
    this.changePage(0);
  }

  getUsers(params: ParamsModel): void {
    this.loader = true;
    this.userService.getUsers(params)
      .pipe(finalize(() => this.loader = this.userService.loader))
      .subscribe((res: Response) => {
      this.userList = res.data;
      const page: number = res.total_pages;
      this.pages.length = 0;
      this.getPages(page);
    });
  }

  getPages(page: number): void {
    for (let i=0; i < page; i++) {
      this.pages.push(i);
    }
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.pages.length = 0;
    this.queryParams.params.page = String(this.currentPage+1);
    this.getUsers(this.queryParams)
  }

  changeItemsOnPage(element: string): void {
    this.pages.length = 0;
    this.queryParams.params.per_page = element;
    this.queryParams.params.page = '0';
    this.currentPage = 0;
    this.getUsers(this.queryParams);
  }
}

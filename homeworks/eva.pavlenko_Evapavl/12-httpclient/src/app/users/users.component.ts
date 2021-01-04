import { Component, OnDestroy, OnInit } from '@angular/core';

import { UserService } from "../services/user.service";
import { User } from "../models/user.model";
import { Subscription } from "rxjs";
import { LoadingService } from "../services/loading.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersData: User[] = [];
  page: number = 1;
  count: number = 0;
  pageSize: number = 1;
  selected: number = 1;
  pageSizes: number[] = [1, 2, 3, 4];
  loading: boolean = false;

  private subscrition: Subscription = new Subscription();

  constructor(private userService: UserService,
              private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.getUsers();
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.subscrition.add(this.loadingService.loadingSub
      .subscribe((loading) => {
        this.loading = loading;
      }));
  }

  getRequestParams(page: number, pageSize: number) {
    let options = {
      params: {
        page: 0,
        per_page: 0
      },
      headers: {
        'Accept-Language': '000kkhg'
      }
    }

    if (page) {
      options.params.page = page;
    }

    if (pageSize) {
      options.params.per_page = pageSize;
    }
    return options;
  }

  getUsers() {
    const options = this.getRequestParams(this.page, this.pageSize);

    this.subscrition.add(this.userService.getUsers(options).subscribe(
      ({data, total}) => {
        this.usersData = data;
        this.count = total;
        localStorage.setItem('token', options.headers["Accept-Language"])
      }))
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getUsers();
  }

  handlePageSizeChange(event: Event) {
    if(event.currentTarget) this.pageSize = event.currentTarget.value;
    this.page = 1;
    this.getUsers();
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe()
  }

}

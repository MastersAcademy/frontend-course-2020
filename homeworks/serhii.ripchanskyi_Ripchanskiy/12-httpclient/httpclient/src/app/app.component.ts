import { Component, OnInit, OnDestroy } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Subscription } from "rxjs";

import { UserService } from "./services";
import { PageRequestParams, User, UsersPage } from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  users: UsersPage;
  pageRequestParams: PageRequestParams = {
    params : { page: '1', per_page: '2' }
  }
  pages: number [];
  currentPage: number;
  itemsPerPage: number [];
  areUsersLoading: boolean = true;

  constructor(private userService: UserService) {
    this.areUsersLoading = userService.getLoader();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getUsers(): void {
    const MAX_ITEMS_PER_PAGE = 6;
    this.userService.startLoader();
    this.subscription.add(
    this.userService.getUsers(this.pageRequestParams)
      .pipe(finalize(() => {
        this.userService.stopLoader();
        this.areUsersLoading = this.userService.getLoader();
      }))
      .subscribe((users: UsersPage) => {
        this.users = users;
        this.currentPage = users.page;
        this.itemsPerPage = this.getArrayOfNumbers(MAX_ITEMS_PER_PAGE);
        this.pages = this.getArrayOfNumbers(users.total / users.per_page);
      }));
  }

  onChangePage(page: number) {
    this.pageRequestParams.params.page = String(page);
    this.getUsers();
  }

  onChangeItemsPerPage(number: string) {
    this.pageRequestParams.params.per_page = String(number);
    this.getUsers();
  }

  private getArrayOfNumbers(count: number): number [] {
    return Array.from({ length: count },(v, k) => k + 1)
  }
}

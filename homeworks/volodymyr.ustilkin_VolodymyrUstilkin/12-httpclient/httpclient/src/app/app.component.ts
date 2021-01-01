import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./services";
import {Subscription} from "rxjs";
import {finalize} from "rxjs/operators";
import {UsersPage} from "./models/users.page";
import {UserRequestOptions} from "./models/user.request.options";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  usersPage: UsersPage;
  pageOptions: UserRequestOptions;
  pagination: number[];
  loading: boolean;

  constructor(private userService: UserService) {
    this.pageOptions = new UserRequestOptions();
  }

  ngOnInit() {
    this.pageOptions.params.page = '1';
    this.pageOptions.params.per_page = '2';
    this.loadUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadUsers() {
    this.loading = true;
    this.subscription.add(
      this.userService
        .getUsers(this.pageOptions)
        .pipe(finalize(() => this.loading = this.userService.loading))
        .subscribe((page: UsersPage) => {
          this.usersPage = page;
          this.pagination = this.updatePagination();
        })
    );
  }

  changeNumberCardsPerPage(event: Event) {
    this.pageOptions.params.per_page = (event.target as HTMLInputElement).value;
    this.loadUsers();
  }

  changePage(number: number) {
    this.pageOptions.params.page = String(number);
    this.loadUsers();
  }

  updatePagination(): number[] {
    const offset = 4;
    const pagination: number[] = []
    const startPage = this.usersPage.page - offset > 1 ? this.usersPage.page - offset : 1;
    const endPage = this.usersPage.page + offset <= this.usersPage.total_pages
      ? this.usersPage.page + offset
      : this.usersPage.total_pages;

    for (let i: number = startPage; i <= endPage; i++) {
      pagination.push(i);
    }

    return pagination;
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./services";
import {UserRequestOptions} from "./models/UserRequestOptions";
import {UsersPage} from "./models/UsersPage";
import {Subscription} from "rxjs";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  usersPage: UsersPage;
  pageOptions: UserRequestOptions;
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
        .subscribe((page: UsersPage) => this.usersPage = page)

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

  getPagination(): number[] {
    const pagination: number[] = []
    const startPage = this.usersPage.page - 2 > 1 ? this.usersPage.page - 2 : 1;
    const endPage = this.usersPage.page + 2 <= this.usersPage.total_pages ? this.usersPage.page + 2 : this.usersPage.total_pages;

    for (let i: number = startPage; i <= endPage; i++) {
      pagination.push(i);
    }
    console.log(pagination);
    return pagination;
  }

}

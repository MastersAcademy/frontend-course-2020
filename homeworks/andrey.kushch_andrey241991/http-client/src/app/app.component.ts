import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { User, UserListResponse } from './models/user';
import { Subscription } from 'rxjs';
import { LoaderService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-client';
  users: User[];
  subscription: Subscription = null;
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private readonly userService: UserService, private readonly loaderService: LoaderService) {
    this.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  currentPageChanged(page: number): void {
    this.currentPage = page;
    this.getUsers();
  }

  get isLoading(): boolean {
    return this.loaderService.isLoading;
  }

  getUsers() {
    this.subscription = this.userService.getUsers(this.currentPage)
      .subscribe((userListResponse: UserListResponse) => {
        this.users = userListResponse.data;
        this.totalPages = userListResponse.total_pages;
      });
  }

}
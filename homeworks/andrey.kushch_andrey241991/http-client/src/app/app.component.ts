import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { User } from './models/user';
import { Subscription } from 'rxjs';
import { LoaderService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-client';
  users: any;
  subscription: Subscription = null;
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private userService: UserService, public loaderService: LoaderService) {
    this.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
    this.getUsers();
  }

  getUsers() {
    this.subscription = this.userService.getUsers(this.currentPage)
      .subscribe((users: User) => {
        this.users = users;
        this.totalPages = users.total_pages;
      });
  }

}
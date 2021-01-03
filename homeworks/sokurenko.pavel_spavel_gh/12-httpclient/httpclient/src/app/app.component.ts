import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './services/user.service';
import { Page } from './models/page.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  pages: number[] = [];

  pageConfix = {
    page: 1,
    perPage: 2,
  };

  title = 'httpclient';

  pageData: Page | undefined;

  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.updatePageFromSerrver();
  }

  updatePageFromSerrver(): void {
    this.subscription.add(this.userService.getUsers(this.pageConfix.page, this.pageConfix.perPage).subscribe((users: Page) => {
      this.pageData = users;
      this.pages = Array(this.pageData.total_pages).fill(undefined).map((x, i) => (i + 1));
    }));
  }

  selectPage(pageNumber: number): void {
    this.pageConfix.page = pageNumber;
    this.updatePageFromSerrver();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

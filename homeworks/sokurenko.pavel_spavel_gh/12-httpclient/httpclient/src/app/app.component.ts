import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderService } from './services/loader.service';
import { UserService } from './services/user.service';
import { Page } from './models/page.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  pages: number[] = [];

  pageConfig = {
    page: '1',
    perPage: '2',
  };

  title = 'httpclient';

  pageData: Page | undefined;

  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService, public loaderService: LoaderService) {}

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  startLoader = true;

  ngOnInit(): void {
    this.updatePageFromSerrver();
    this.isLoading.subscribe(() => this.startLoader = false);
  }

  updatePageFromSerrver(): void {
    this.subscription.add(this.userService.getUsers(this.pageConfig.page, this.pageConfig.perPage).subscribe((users: Page) => {
      this.pageData = users;
      this.pages = Array(this.pageData.total_pages).fill(undefined).map((x, i) => (i + 1));
    }));
  }

  selectPage(pageNumber: number): void {
    this.pageConfig.page = pageNumber.toString();
    this.updatePageFromSerrver();
  }

  changePerPage(event: Event ): void {
    this.pageConfig.page = (1).toString();
    this.pageConfig.perPage = (event.target as HTMLInputElement).value;
    this.updatePageFromSerrver();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

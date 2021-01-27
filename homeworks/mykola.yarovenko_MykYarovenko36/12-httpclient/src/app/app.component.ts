import { Component, OnInit } from '@angular/core';
import { LoaderService, PagePersonsService, PageService, UserServise } from './services';
import { Subscription } from 'rxjs';

import { User }  from './models/user';
import { DefaultUsersPage } from './models/users-page';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
    state!: User[];
    isLoading!: boolean;
    reqPages!: number[];
    stateSubscription!: Subscription;
    loaderSubscription!: Subscription;
    constructor(
      private userServise: UserServise,
      private pagePersonsService: PagePersonsService,
      private pageServise: PageService,
      private loaderService: LoaderService,
    ) {}

    getUsers():void {
      this.stateSubscription =
      this.userServise.getUsers().subscribe(
        (item: DefaultUsersPage):void => {
          this.state = item.data;
          this.reqPages = Array.from(Array(item.total_pages).keys()).map(item => item + 1);
        },
        (error: ErrorEvent): void => {
          console.error(error);
        }
      );
      this.loaderSubscription = this.loaderService.Loader$.subscribe(
        (isLoading: boolean): void => {
          this.isLoading = isLoading;
        }
      )
    }

    personsOnPage(event: any): void {
      this.pagePersonsService.SetPagePersons(event.currentTarget.value);
      this.pageServise.SetCurrentPage(1);
      this.getUsers();
    }

    togglePage(value: number): void{
      this.pageServise.SetCurrentPage(value);
      this.getUsers();
    }

    ngOnInit() {
      this.getUsers();
    }

    ngOnDestroy() {
      this.stateSubscription.unsubscribe();
      this.loaderSubscription.unsubscribe();
    }
}

import { Component, OnInit } from '@angular/core';
import { UserServise } from './services';
import { delay, map } from 'rxjs/operators';
import { User }  from './models/user';
import { DefaultUsersPage } from './models/users-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    state!: User[];
    page!: string | null;
    reqPageBtn!: number;
    isLoading!: boolean;
    isEmpty!: boolean;
    reqPages!: number[];
    constructor(
      private userServise: UserServise,
    ) {}
    getUsers():void {
      this.page = localStorage.getItem('page') === null? '1' : localStorage.getItem('page');
      this.userServise.getUsers(
        {
          params: {
            page: this.page,
          }
        }
      ).pipe(
        map((item) => {
          this.isLoading = true;
          return item;
        }),
        delay(2000)
      ).subscribe(
          (item: DefaultUsersPage):void => {
            this.isLoading = false;
            this.state = item.data;
            this.isEmpty = item.data.length === 0;
            this.reqPageBtn = item.page;
            this.reqPages = Array.from(Array(item.total_pages).keys()).map(item => item + 1);
          },
          (error) => {
            console.error(error);
          }
      );
    }

    personsOnPage(event: any): void {
      localStorage.setItem('per_page', event.currentTarget.value);
      localStorage.setItem('page', '1');
      this.getUsers();
    }

    ngOnInit() {
      localStorage.clear();
      this.getUsers();
    }

    ngOnDestroy() {
      this.userServise.unsubscribe();
    }
}

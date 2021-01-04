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
    currentPage!: string | null;
    reqPageBtn!: number;
    isLoading!: boolean;
    isEmpty!: boolean;
    constructor(
      private userServise: UserServise,
    ) {}
    getUsers():void {
      this.currentPage = this.currentPage === null? '1' : localStorage.getItem('page');
      this.userServise.getUsers(
        {
          params: {
            page: this.currentPage,
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
            this.reqPageBtn = item.page;
            this.isEmpty = item.data.length === 0;
          },
          (error) => {
            console.error(error);
          }
    );
  }

  ngOnInit() {
    this.getUsers();
  }
}

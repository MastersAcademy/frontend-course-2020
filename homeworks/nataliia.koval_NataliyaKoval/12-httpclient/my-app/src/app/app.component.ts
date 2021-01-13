import { Component, OnDestroy, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';

import { Info } from './interfaces/info.interface';
import { User } from './interfaces/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  info?: Info;
  users: User[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 2;
  areCardsLoaded: boolean = false;
  private subscription: Subscription = new Subscription();   
  constructor(private usersService: UsersService){}

  ngOnInit() {
    this.getInfo()
  }
  
  getRequestParams(page: number, pageSize: number) {
    let options = {
      params: {
        page: 0,
        per_page: 0
      },
    }

    if (page) {
      options.params.page = page;
    }

    if (pageSize) {
      options.params.per_page = pageSize;
    }
    
    return options;
  }

  getInfo() {
    let options = this.getRequestParams (this.page, this.pageSize);

    this.subscription.add(this.usersService.getInfo(options)
      .subscribe(info => {
        this.total = info.total;
        this.users = info.data;
      }));
  }
  
  pageChanged(event: any) {
    this.page = event;
    this.getInfo();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

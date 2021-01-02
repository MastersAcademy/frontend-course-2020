import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'httpclient';

  userData: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}



  ngOnInit(): void {
    this.subscription.add(this.userService.getUsers().subscribe((users: User[]) => {
      this.userData = users;
      console.log('ok');
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

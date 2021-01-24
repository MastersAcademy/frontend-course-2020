import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { LoaderService } from './services/loader.service';
import { User } from './models/user.model';
import { Page } from './models/page.model';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy, OnInit {
  loader: Subject<boolean> = this.loaderService.loader;
  isLoaded: boolean = false;
  userData: User[] = [];
  totalPages: number[];
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loader.subscribe((value) => this.isLoaded = value);
    this.sendingRequest();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sendingRequest(pageNumber: number = 1) {
    this.subscription.add(this.userService.getUsers(pageNumber.toString()).subscribe((users: Page) => {
      this.totalPages = Array(users.total / parseInt(users.per_page)).fill('').map((x, i) => i + 1);
      this.userData = users.data;
    }));
  }
}

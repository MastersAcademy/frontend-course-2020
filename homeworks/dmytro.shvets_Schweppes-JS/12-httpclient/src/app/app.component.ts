import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { LoaderService } from './services/loader.service';
import { User } from './models/User';
import { Page } from './models/Page';
import { Subject, Subscription } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

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

  sendingRequest() {
    this.subscription.add(this.userService.getUsers().subscribe((users: Page) => {
      this.totalPages = Array(users.total / parseInt(users.per_page)).fill('').map((x, i) => i + 1);
      this.userData = users.data;
    }));
  }

  loadNextPage(pageNumber: number) {
    this.userService.changingPage(pageNumber);
    this.sendingRequest();
  }
}

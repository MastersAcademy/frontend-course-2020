import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './interfaces/user';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userData: User[] = [];

  currentPage: number = 1;

  loading: boolean = true;

  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription.add(this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.userData = users;
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

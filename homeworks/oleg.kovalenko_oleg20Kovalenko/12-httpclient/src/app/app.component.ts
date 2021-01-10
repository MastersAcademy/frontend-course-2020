import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'httpclient';

  userData: User[] = [];
  loading: boolean = false;
  collection = [];
  page: number = 1;
  count = 0;
  pageSize = 2;

  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  handlePageChange(event: number) {
    this.page = event;
    this.getUser();
  }

  ngOnInit() {
    this.getUser();
    this.subscription.add(
      this.userService.getUsers().subscribe((users: User[]) => {
        this.userData = users;
      })
    );
  }
  private getUser(): void {
    this.loading = true;
    this.userService
      .getUsers()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((userData: User[]) => {
        this.userData = userData;
      });
  }
}

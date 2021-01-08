import { Component, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './interfaces/user';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [];
  currentPage: number = 1;
  loading: boolean = true;
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription.add(this.getUsers());
  }

  get paginationParams(): Object {
    return {itemsPerPage: 2, currentPage: this.currentPage};
  }

  getUsers() {
      return this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.loading = false;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

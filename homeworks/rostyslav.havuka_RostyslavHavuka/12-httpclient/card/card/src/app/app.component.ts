import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserRequestOptions } from './models/user.requset.option';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean;
  pageOptions: UserRequestOptions;

  constructor(private userService: UserService) {
    this.pageOptions = new UserRequestOptions();
    this.userService.boolSubject.subscribe((newBool: boolean) => { this.isLoading = newBool });
  }

  ngOnInit() {
    this.pageOptions.params.page = '1';
    this.pageOptions.params.per_page = '2';
    this.getUser();
  }

  getUser() {
    this.userService.getUsers(this.pageOptions)
    .subscribe((user) => {
      this.users = user;
    });
  }

  onPageChanged(pageNumber) {
    this.pageOptions.params.page = pageNumber;
    this.getUser();
  }
}

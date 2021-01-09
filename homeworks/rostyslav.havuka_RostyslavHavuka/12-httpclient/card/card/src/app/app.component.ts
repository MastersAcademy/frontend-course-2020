import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
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
  isLoading: boolean = true;
  pageOptions: UserRequestOptions;

  constructor(private userService: UserService) {
    this.pageOptions = new UserRequestOptions();
  }

  ngOnInit() {
    this.pageOptions.params.page = '1';
    this.pageOptions.params.per_page = '2';
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.userService.getUsers(this.pageOptions)
    .pipe(finalize(() => this.isLoading = this.userService.loader))
    .subscribe((user) => {
      this.users = user
    });
  }

  onPageChanged(pageNumber) {
    this.pageOptions.params.page = pageNumber;
    this.getUsers();
  }
}

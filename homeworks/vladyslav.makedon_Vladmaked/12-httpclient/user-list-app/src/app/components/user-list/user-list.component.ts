import {Component} from '@angular/core';
import {User} from '../../models';
import {UserService} from '../../services';
import {HttpParams} from '@angular/common/http';

import {Interceptor} from '../../interceptors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users!: User[];
  totalPages!: number[];
  params!: HttpParams;
  areUsersLoading = false;

  constructor(private userService: UserService, private interceptor: Interceptor) {
    this.setQueryParams(2, 1);
    this.getUsers(this.params);
    this.interceptor.areUsersLoading$
      .subscribe((areUsersLoading) => {
        this.areUsersLoading = areUsersLoading;
        console.log(this.areUsersLoading);
      });
  }

  setQueryParams(perPage: number, page: number): void {
    this.params = new HttpParams()
      .append('per_page', perPage.toString())
      .append('page', page.toString());
  }

  getUsers(params: HttpParams): void {
    this.areUsersLoading = true;
    this.userService.getUsers(params).subscribe((response) => {
      this.users = response.data;
      this.totalPages = new Array(response.total_pages);
    });
  }
}

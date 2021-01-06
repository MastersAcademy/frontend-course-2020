import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {finalize} from "rxjs/operators";
import {User} from "../models/user.model";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  userData: User[] = [];
  page: number = 1;
  collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  count = 0;
  pageSize = 2;

  constructor(
    private userService: UserService,
  ) {
  }

  pageChange(page: number): void {
    this.page = page;
    this.getUser()
    console.log(this.page)
  }

  private getUser(): void {
    this.userService.getUsers().pipe(
    ).subscribe((userData: User[]) => {
      this.userData = userData;
    });
    console.log(this.userData)
  }
}

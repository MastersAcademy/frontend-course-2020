import {Component, OnInit} from '@angular/core';
import {User} from "./models/user.model";
import {UserService} from "./services/user.service";
import {RegisterService} from "./services/register.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userData: User[] = [];

  constructor(
    private userService: UserService,
    private registerService: RegisterService
  ) {  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users:User[]) => {
      this.userData = users
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {User} from "./models/user.model";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 public userData: User[] = [];

  constructor(
    private userService: UserService,
  ) {  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users:User[]) => {
      this.userData = users
    })
  }
}
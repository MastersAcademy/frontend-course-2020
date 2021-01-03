import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {RegisterService} from "../services/register.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  userData: User[] = [];

  // private  subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    private registerService: RegisterService
  ) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.userData = users;
    });
  }

}

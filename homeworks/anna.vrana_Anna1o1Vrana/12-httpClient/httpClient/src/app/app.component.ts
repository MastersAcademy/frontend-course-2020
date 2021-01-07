import {Component, OnInit} from '@angular/core';
import {User} from "./models/user.model";
import {UserService} from "./services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public userData: User[] = [];
  private subscription: Subscription = new Subscription();
  currentPage: number = 1;

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {

    this.subscription.add(this.userService.getUsers().subscribe((users: User[]) => {
      this.userData = users
    }))

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

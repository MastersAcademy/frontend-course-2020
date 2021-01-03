import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  users: User[] = [];
  pageOfItems: Array<any> = [];
  items: Array<number> = [1, 2, 3];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers(0,2)
  
  }

  getUsers(a: number, b: number) {
    this.userService.getUsers()
    .subscribe((user) => {
      this.users = user.slice(a, b)
    });
  }

  getUser(event: any) {
   switch (event.target.innerText) {
     case '1':
       this.getUsers(0,2)
       break;
     case '2':
      this.getUsers(2,4)
       break;
     case '3':
      this.getUsers(4, 6)
       break;

     default: //do nothing
       break;
   }
  }

} 

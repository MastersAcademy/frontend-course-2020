import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';

import { InfoInterface } from './interfaces/info.interface';
import { UserInterface } from './interfaces/user.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  // info: InfoInterface;
  users: UserInterface[] = [];
  
  constructor(private usersService: UsersService){}

  ngOnInit() {
    this.getInfo()
  }
    
  getInfo() {
    this.usersService.getInfo()
      .subscribe(info => {
        console.log(info);
        this.users = info.data;
      })
  }
     
}

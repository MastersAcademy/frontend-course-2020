import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from './models/user.model';
import { UserService } from './services/user.service'
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  users: User[] = [];
  items: Array<number> = [1, 2, 3];
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  isContent!: boolean;
  constructor(private userService: UserService, private loaderService: LoaderService) {}

  ngOnInit() {
    this.getUsers(0,2)
    this.isLoading.subscribe((e) => console.log(e));
  }

  getUsers(a: number, b: number) {
    this.isContent = true;
    this.userService.getUsers()
    .pipe(finalize(() => this.isContent = false))
    .subscribe((user) => {
      this.users = user.slice(a, b);
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

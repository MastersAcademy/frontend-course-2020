import { Component, OnInit } from '@angular/core';
import {LoaderService, UserService} from "./services";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public usersData: any;
  public totalUsers: string;
  public totalPages: string;

  public currentPage: string = '1';
  public usersPerPage: string = '2';

  public loaderVisible: Subject<boolean> = this.loaderService.loaderVisible;
  public contentVisible: Subject<boolean> = this.loaderService.contentVisible;

  constructor(private userService: UserService, private loaderService: LoaderService) {}

  changeState() {
    this.userService.getUsers(this.usersPerPage, this.currentPage).subscribe((data: any) => {
      this.usersData =  data.data;
      this.totalUsers = data.total;
      this.totalPages = data.total_pages;
    })
  }

  changePage(event): void {
    this.currentPage = event.target.innerText;
    this.changeState();
  }

  selectedView(event): void {
    this.usersPerPage = event.target.value;
    this.currentPage = '1';
    this.changeState();
  }

  checkNumbOfCurrentPage(page: number): boolean {
    return this.currentPage === String(page);
  }

  ngOnInit() {
    this.changeState();
  }
}

import { Component, OnInit } from '@angular/core';
import {LoaderService, UserService} from "./services";
import {Subject} from "rxjs";
import {IUserModel} from "../models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public usersData: IUserModel[];
  public totalUsers: number;
  public totalPages: number;

  public currentPage: number = 1;
  public usersPerPage: number = 2;

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

  selectedView(event): void {
    this.usersPerPage = event.target.value;
    this.currentPage = 1;
    this.changeState();
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.changeState();
  }

  checkNumbOfCurrentPage(page: number): boolean {
    return this.currentPage === page;
  }

  ngOnInit() {
    this.changeState();
  }
}

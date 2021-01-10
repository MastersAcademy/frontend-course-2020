import { Component, OnInit } from '@angular/core';
import { Page, User } from '../user/models/user.model';
import { PageService } from '../../services/page.service';
import { LoaderService } from '../../services/loader.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userData: User[] = [];
  totalPage: number[];
  loading: boolean = false;

  constructor(
    private pageService: PageService,
    private _loader: LoaderService
  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.listenToLoading();
  }

  getUserData(): void {
    this.pageService.getPage().subscribe((page: Page) => {
      this.userData = page.data;
      this.totalPage = Array(page.total_pages).fill(1).map((x, i)=>i);
    })
  }

  onClickBtn(value: number): void {
    this.pageService.getPageWithTwoUsers(value);
    this.getUserData();
  }

  listenToLoading(): void {
    this._loader.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}

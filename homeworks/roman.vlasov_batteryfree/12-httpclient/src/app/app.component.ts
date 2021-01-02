import { Component, OnInit } from '@angular/core';
import { UserService } from './services';
import { User } from './models';
import { LoaderService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'httpclient';
    public isLoading: boolean = true;
    public totalPages: number = 0;
    public users: User[] = [];

    constructor(private userService: UserService, private loaderService: LoaderService) { }

    ngOnInit(): void {
        this.loadPage(1);
        this.loaderService.loading().subscribe((status: boolean) => {
            this.isLoading = status;
            console.log(status);
        })

    }

    loadPage(page: number): void {
        this.userService.setPage(page);
        this.userService.getListUsers().subscribe((res) => {
            this.users = res.data;
            this.totalPages = res.total_pages;
        });
    }
}

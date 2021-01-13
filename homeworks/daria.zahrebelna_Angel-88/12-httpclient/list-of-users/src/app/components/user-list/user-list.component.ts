import {Component} from '@angular/core';
import {HttpParams} from "@angular/common/http";

import {PageUser} from "../../models";
import {UserLoaderService, UserService} from "../../services";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    data!: PageUser[];
    areUsersLoading = false;
    totalPagesArray!: number[];

    constructor(private userService: UserService, private userLoaderService$: UserLoaderService) {
        this.getUsers(2, 1);
        this.userLoaderService$.areUsersLoading$
            .subscribe((areUsersLoading) => this.areUsersLoading = areUsersLoading);
    }

    getUsers(per_page: number, page: number): void {
        this.areUsersLoading = true;
        const params = new HttpParams()
            .append('per_page', per_page.toString())
            .append('page', page.toString());
        this.userService.getUsers(params).subscribe((response) => {
            this.data = response.data;
            this.totalPagesArray = new Array(response.total_pages);
        })
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListUsers } from '../models'

@Injectable()

export class UserService {
    private URL: string = 'https://reqres.in/api/users';
    private options = {
        params: {
            page: '1',
            per_page: '2'
        }
    }

    constructor(private http: HttpClient) { }

    public getListUsers(): Observable<ListUsers> {
        return this.http.get<ListUsers>(this.URL, this.options);
    }

    public setPage(page: number): void {
        this.options.params.page = page.toString();
    }
}

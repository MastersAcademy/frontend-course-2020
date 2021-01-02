import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private BASE_API = 'https://reqres.in/api/';

    constructor(private http: HttpClient) {
    }

    getUsers(page: number): Observable<any> {
        return this.http.get(`${this.BASE_API}users?page=${page}`);
    }
}
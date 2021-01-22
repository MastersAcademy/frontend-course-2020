import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserListResponse } from '../models/user';

@Injectable()
export class UserService {
    private BASE_API = 'https://reqres.in/api/';

    constructor(private readonly http: HttpClient) {
    }

    getUsers(page: number): Observable<UserListResponse> {
        let params = new HttpParams();
        params = params.append('page', String(page));
        return this.http.get<UserListResponse>(`${this.BASE_API}users`, {params});
    }
}
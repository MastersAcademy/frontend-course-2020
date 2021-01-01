import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { InfoInterface } from '../interfaces/info.interface';

@Injectable({providedIn: 'root'})

export class UsersService {
    constructor(private http: HttpClient){}

    getInfo(): Observable<InfoInterface> {
       return this.http.get<InfoInterface>('https://reqres.in/api/users?page=1&per_page=2');
    }
    
}

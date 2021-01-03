import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Info } from '../interfaces/info.interface';

@Injectable({providedIn: 'root'})

export class UsersService {
    
    ROOT_URL = 'https://reqres.in/api/users';

    constructor(private http: HttpClient){}

    getInfo(options: any): Observable<any> {
       return this.http.get<Info>(this.ROOT_URL, options); 
    }  
}

// `https://reqres.in/api/users?page=1&per_page=2`
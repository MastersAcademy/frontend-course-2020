import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Info } from '../interfaces/info.interface';

// const baseURL = 'https://reqres.in/api/users';
// const params = new HttpParams()
//     .set('page', p)
//     .set('per_page', '2');

// const fullURL = `${baseURL}?${params.toString()}`;


@Injectable({providedIn: 'root'})

export class UsersService {
    
    baseURL = 'https://reqres.in/api/users';

    constructor(private http: HttpClient){}

    getInfo(options: any): Observable<any> {
       return this.http.get<Info>(this.baseURL, options); 
    }  
}

// `https://reqres.in/api/users?page=1&per_page=2`
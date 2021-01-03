import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Info } from '../interfaces/info.interface';

@Injectable()

export class UsersService {
    
    ROOT_URL = 'https://reqres.in/api/users';

    constructor(private http: HttpClient){}

    getInfo(options: any): Observable<any> {
       return this.http.get<Info>(this.ROOT_URL, options); 
    }  
}

import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class UserLoaderService {
    areUsersLoading$: Subject<boolean> = new Subject<boolean>();

    constructor() {
    }
}

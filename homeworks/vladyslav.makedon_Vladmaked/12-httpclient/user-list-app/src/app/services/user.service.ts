import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Page} from '../models';
import {delay, finalize} from 'rxjs/operators';

@Injectable()
export class UserService {
  ROOT_URL = 'https://reqres.in/api/users';
  areUsersLoading$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {
  }

  getUsers(params: HttpParams): Observable<Page> {
    return this.httpClient.get<Page>(this.ROOT_URL, {params}).pipe(
      delay(2000),
      finalize(() => this.areUsersLoading$.next(false))
    );
  }
}

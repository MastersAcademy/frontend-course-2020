import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DefaultUsersPage } from '../models/users-page';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<DefaultUsersPage>, next: HttpHandler): Observable<HttpEvent<DefaultUsersPage>> {
    let perPage = localStorage.getItem('per_page') === null? '2' : localStorage.getItem('per_page');
    request = request.clone({
      headers : request.headers.set
      ('Accept-Language', 'ru-RU,ru;q=0.9'),
      params :
        request.params.set(
        'per_page', `${perPage}`),
        });
    return next.handle(request);
  }
}

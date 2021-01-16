import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

import { DefaultUsersPage } from '../models/users-page';
import { LoaderService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) {}
    intercept(request: HttpRequest<DefaultUsersPage>, next: HttpHandler): Observable<HttpEvent<DefaultUsersPage>> {
      this.loaderService.ToogleLoaderEnable();
      request = request.clone({
        headers : request.headers.set
            ('Accept-Language', 'ru-RU,ru;q=0.9'),
        });
      return next.handle(request).pipe(
        delay(2000),
        finalize(() => { this.loaderService.ToogleLoaderDisable() }),
    );
  }
}

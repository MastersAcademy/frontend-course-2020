import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {LoaderService} from '../services';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      headers: req.headers.set('Accept-Language', 'en;q=1')
        .append('Custom-Header', 'custom-value')
    });

    return next.handle(cloned).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          if (event.status === 200) {
            this.loaderService.areUsersLoading$.next(false);
          }
        }
      })
    );
  }
}

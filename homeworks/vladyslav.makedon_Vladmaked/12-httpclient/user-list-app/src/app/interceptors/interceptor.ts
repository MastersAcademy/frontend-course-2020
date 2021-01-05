import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class Interceptor implements HttpInterceptor {
  areUsersLoading$: Subject<boolean> = new Subject<boolean>();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      headers: req.headers.set('Accept-Language', 'en;q=1')
        .append('Custom-Header', 'custom-value')
    });

    return next.handle(cloned).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          if (event.status === 200) {
            this.areUsersLoading$.next(false);
          }
        }
      })
    );
  }
}

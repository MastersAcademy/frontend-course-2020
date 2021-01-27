import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap,finalize, delay } from 'rxjs/operators';
import { LoaderService } from '../services/loading.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({ headers: request.headers.set('accept-language', 'en-US') });

    this.loaderService.show();

    return next.handle(request).pipe(
      delay(500),
      finalize(() => this.loaderService.hide()));
  }
}

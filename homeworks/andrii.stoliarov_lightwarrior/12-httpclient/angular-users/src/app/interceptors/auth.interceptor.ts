import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(initialRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = initialRequest.clone({
      headers: initialRequest.headers.set('Accept-Language', 'en-US,en;q=0.9,fr;q=0.8,de;q=0.7,*;q=0.5').append('Auth', 'RANDOM TEXT')
    })

    return next.handle(request);
  }

}

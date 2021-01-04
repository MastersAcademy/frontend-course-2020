import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpEvent, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SomeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.append('Accept-Language', 'en-US;uk_UA;ru-RU;de_DE;fr_FR;')});
    return next.handle(req);
  }
}

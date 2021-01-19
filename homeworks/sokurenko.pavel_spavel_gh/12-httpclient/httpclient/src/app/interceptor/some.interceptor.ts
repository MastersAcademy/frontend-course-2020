import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpEvent, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class SomeInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    req = req.clone({ headers: req.headers.append('Accept-Language', 'en-US;uk_UA;ru-RU;de_DE;fr_FR;')});
    return next.handle(req).pipe(
      finalize(() => this.loaderService.hide()),
    );
  }
}

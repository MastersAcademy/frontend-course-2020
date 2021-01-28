import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()

export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set('Accept-Language','da;q=1, en-GB;q=0.8, en;q=0.7') });
    this.loaderService.hidden();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.loaderService.visible()
      })
    );
  }
}

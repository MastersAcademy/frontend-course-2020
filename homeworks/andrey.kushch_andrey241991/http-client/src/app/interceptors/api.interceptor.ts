import { finalize, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { LoaderService } from '../services';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    constructor(private readonly loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.enableLoading();
        const paramReq = req.clone({
            headers: req.headers.set(
                'Accept-Language',
                'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,de'
            )
        });

        return next.handle(paramReq).pipe(
            delay(2000),
            finalize(() => this.loaderService.disableLoading())
        );
    }
}
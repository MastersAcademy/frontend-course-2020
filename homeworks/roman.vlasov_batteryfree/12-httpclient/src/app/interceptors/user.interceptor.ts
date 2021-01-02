import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderService } from '../services';

@Injectable()

export class UserInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.setStatusLoading(true);

        if (!request.headers.has('Accept-Language')) {
            request = request.clone({ headers: request.headers.set('Accept-Language', 'ua-UA') });
        }

        request = request.clone({ headers: request.headers.set('bs-session-id', 'ea9d3877ca32484fa440deaf5d45d230') });

        return next.handle(request).pipe(
            finalize(() => this.loaderService.setStatusLoading(false))
        );
    }
}
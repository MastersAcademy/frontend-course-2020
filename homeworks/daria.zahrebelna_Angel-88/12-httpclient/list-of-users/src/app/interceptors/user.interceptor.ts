import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";

import {UserLoaderService} from "../services";

@Injectable()
export class UserInterceptor implements HttpInterceptor {

    constructor(private userLoaderService: UserLoaderService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloned = request.clone({
            headers: request.headers.set('Accept-Language', 'en;q=1')
                .append('My-Header', 'my-value')
        })

        return next.handle(cloned).pipe(
            tap((event) => {
                if (event.type === HttpEventType.Response) {
                    if (event.status === 200) {
                        this.userLoaderService.areUsersLoading$.next(false);
                    }
                }
            })
        )

    }
}

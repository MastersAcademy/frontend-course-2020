import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

import { UserService } from "../services";

@Injectable()
export class UserLoaderInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: request.headers.set('Accept-Language', 'en-En')});
    request = request.clone({ headers: request.headers.set('token', 'lorenIpsum') });

    return next.handle(request).pipe(
      finalize(() => this.userService.stopLoader())
    );
  }
}

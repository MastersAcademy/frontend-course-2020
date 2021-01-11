import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { UserService } from '../services';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(public userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({headers: request.headers.set('Accept-Language', 'en-En')});
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      this.userService.boolSubject.next(true)

      return next.handle(request).pipe(
        finalize(() => this.userService.boolSubject.next(false))
      );
    }
  }

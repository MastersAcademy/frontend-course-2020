import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {UserService} from "../services";

@Injectable()
export class UserRequestInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers: req.headers.append('accept-language', 'ua-UA')});

    console.log(`interceptor: ${req.headers.keys()}`);
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.userService.stopLoader();
        }
      })
    );
  }
}

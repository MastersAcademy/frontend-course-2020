import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, finalize} from "rxjs/operators";
import {LoaderService} from "../services";

@Injectable()
export class HeaderModInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    req = req.clone({ headers: req.headers.set('Accept-Language','en,en-US;q=0.9,ru;q=0.6') })
    return next.handle(req)
      .pipe(
        delay(500),
        finalize(() => {
          this.loaderService.hide();
        })
      );
  }
}

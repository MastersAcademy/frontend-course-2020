import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { fromEvent, Observable } from "rxjs";
import { delay, finalize } from "rxjs/operators";
import { LoaderService } from '../services/loader.service';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(req).pipe(
            delay(1000),
            finalize(() => this.loaderService.hide())
        );
    }
}
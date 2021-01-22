import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const cloned = req.clone({
            headers: req.headers.append('Auth', 'SOME RANDOM TOKEN')
        });
       
        return next.handle(cloned);
    }
}
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HeaderLanguageInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const cloned = req.clone({
            headers: req.headers.append('accept-language', 'uk-UA,uk;q=0.9,ru;q=0.8,en-US;q=0.7,en;ja;q=0.6')
        });
       
        return next.handle(cloned);
    }
}
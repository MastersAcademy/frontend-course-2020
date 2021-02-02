import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { mergeMap, delay } from 'rxjs/operators';


export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any>{
    if (route.data && route.data['nopreload']) {
      return of(null)
    }

    return of(true).pipe(
      delay(2000),
      mergeMap(_ => load())
      );
  }
}

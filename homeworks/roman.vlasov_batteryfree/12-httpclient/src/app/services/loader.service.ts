import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class LoaderService {
    private load = new ReplaySubject<boolean>(1);

    loading(): Observable<boolean> {
        return this.load.asObservable();
    }

    setStatusLoading(inprogess: boolean): void {
        this.load.next(inprogess);
    }
}
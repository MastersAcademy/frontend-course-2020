import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

    private readonly loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public get isLoading(): boolean {
        return this.loadingSubject.value;
    }

    public get isLoading$(): Observable<boolean> {
        return this.loadingSubject.asObservable();
    }

    public enableLoading(): void {
        this.loadingSubject.next(true);
    }

    public disableLoading(): void {
        this.loadingSubject.next(false);
    }

}

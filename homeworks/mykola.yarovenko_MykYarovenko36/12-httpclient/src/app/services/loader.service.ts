import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
    private readonly isLoading = new BehaviorSubject<boolean>(true);

    public get Loader(): boolean {
      return this.isLoading.value;
    }

    public get Loader$(): Observable<boolean> {
      return this.isLoading.asObservable();
    }

    public ToogleLoaderEnable(): void {
      this.isLoading.next(true);
    }

    public ToogleLoaderDisable(): void {
      this.isLoading.next(false);
  }
}

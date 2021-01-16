import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PageService {
    private readonly currentPage = new BehaviorSubject<number>(1);

    public get CurrentPage(): number {
      return this.currentPage.value;
    }
    public get CurrentPage$(): Observable<number> {
      return this.currentPage.asObservable();
    }
    public SetCurrentPage(value: number): void {
      this.currentPage.next(value);
    }
}

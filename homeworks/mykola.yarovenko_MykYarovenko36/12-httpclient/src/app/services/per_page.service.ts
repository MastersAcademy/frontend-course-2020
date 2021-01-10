import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PagePersonsService {
    private readonly persons = new BehaviorSubject<number>(2);

    public get PagePersons(): number {
      return this.persons.value;
    }

    public get PagePersons$(): Observable<number> {
      return this.persons.asObservable();
    }

    public SetPagePersons(value: number): void {
      this.persons.next(value);
    }
}

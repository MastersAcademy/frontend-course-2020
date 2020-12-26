import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Car } from '../models/Car';
import { MOCK_VEHICLES } from '../mocks/vechicles.mock'

@Injectable()
export class CarService {
  constructor(){}
  getCars(): Observable<Car[]> {
    return of(MOCK_VEHICLES).pipe(
      delay(2000)
    );
  }
}

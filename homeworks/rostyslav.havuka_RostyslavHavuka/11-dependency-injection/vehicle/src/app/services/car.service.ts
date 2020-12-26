import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Car } from '../model'
import { MOCK_VEHICLES } from '../mocks'

export class CarService {

  constructor() { }

  getVechicles(): Observable<Car[]> {
    return of(MOCK_VEHICLES).pipe(
      delay(2000),
    );
}
}

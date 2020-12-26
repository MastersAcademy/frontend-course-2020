import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_VEHICLES } from '../mocks/vechicles.mock';
import { Mock_Vehicles } from '../models/vehicles';

@Injectable()
export class CarsService {
  constructor() {}

  getCars(): Observable<Mock_Vehicles[]> {
    return of(MOCK_VEHICLES);
  }
}

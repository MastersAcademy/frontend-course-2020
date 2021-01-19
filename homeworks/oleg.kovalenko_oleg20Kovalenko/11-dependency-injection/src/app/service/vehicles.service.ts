import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_VEHICLES } from '../mocks';
import { delay } from 'rxjs/operators';
import { Vehicles } from '../models';

@Injectable()
export class VehicleService {

  constructor() {}

  getVehicles(): Observable<Vehicles[]> {
    return of(MOCK_VEHICLES).pipe(delay(2000));
  }
}

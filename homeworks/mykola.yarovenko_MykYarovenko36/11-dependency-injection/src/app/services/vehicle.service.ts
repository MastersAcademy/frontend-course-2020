import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_VEHICLES } from '../mocks/vehicles.mock';
import { MockVehicle } from '../models/vehicle';

@Injectable()
export class VehicleService {
  constructor() {}

  getVehicleLayouts(): Observable<MockVehicle[]> {
    return of(MOCK_VEHICLES);
  }
}

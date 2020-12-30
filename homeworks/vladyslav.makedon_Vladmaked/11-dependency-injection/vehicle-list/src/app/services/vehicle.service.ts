import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

import {Vehicle} from '../models';
import {MOCK_VEHICLES} from '../mocks';

@Injectable()
export class VehicleService {
  constructor() {
  }

  getVehicle(): Observable<Vehicle[]> {
    return of(MOCK_VEHICLES).pipe(
      delay(2000)
    );
  }
}

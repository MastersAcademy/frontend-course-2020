import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';

import {Vehicle} from '../../vehicle/models/vehicle.model';
import {MOCK_VEHICLES} from '../mocks';

@Injectable()
export class VehicleService {

  getVehicles(): Observable<Vehicle[]> {
    return of(MOCK_VEHICLES).pipe(
      delay(2000),
    );
  }
}

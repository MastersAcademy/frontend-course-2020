import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Vehicle} from '../models';
import {MOCK_VEHICLES} from '../mocks';
import {delay} from 'rxjs/operators';

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

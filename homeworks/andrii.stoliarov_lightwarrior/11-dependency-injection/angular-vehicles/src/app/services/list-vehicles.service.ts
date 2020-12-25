import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';
import { MOCK_VEHICLES } from '../mocks/vechicles.mock';
import { delay } from 'rxjs/operators';

@Injectable()
export class ListVehiclesService {
  constructor() { }

  getVehicles(): Observable<Vehicle[]> {
    return of(MOCK_VEHICLES).pipe(delay(2000));
  }

}

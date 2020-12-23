import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { IVehicle } from "../vechicle.model";
import { MOCK_VEHICLES } from '../../vechicles.mock';

@Injectable()
export class VehicleService {
  constructor() {}
  getVehicles(): Observable<IVehicle[]> {
    return of(MOCK_VEHICLES).pipe(
      delay( 2000 )
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";
import { delay } from "rxjs/operators";

import { Vehicle } from "../models/vehicle.interface";
import { MOCK_VEHICLES } from "../mocks/vehicles.mock";

@Injectable()
export class VehicleService {

  getVehicle(): Observable<Vehicle[]> {
    return of(MOCK_VEHICLES).pipe(
      delay(2000),
    );
  }
}

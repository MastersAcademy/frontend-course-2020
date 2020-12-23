import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";
import {MOCK_VEHICLES} from "../mocks/vehicles.mock";
import {Vehicle} from "../models/vehicle";

@Injectable()
export class VehicleService {
  getVehicles():Observable<Vehicle[]> {
    return of(MOCK_VEHICLES).pipe(
      delay(2000)
    );
  }
}

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MOCK_VEHICLES } from '../mocks/vechicles.mock';
import { Vehicle } from '../models/vechicle';

@Injectable()
export class VehicleService {
    getVehicles(): Observable<Vehicle[]> {
        return of(MOCK_VEHICLES).pipe(
            delay(2000)
        );
    }
}

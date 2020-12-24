import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { MOCK_VEHICLES } from '../mocks';
import { Vehicle } from '../models';

@Injectable({
    providedIn: 'root'
})

export class VehicleService {
    constructor() { }

    public getVehicles(): Observable<Vehicle[]> {
        return of(MOCK_VEHICLES).pipe(delay(2000));
    };
}

import { Component } from '@angular/core';

import { delay } from 'rxjs/operators';
import { MockVehicle } from './models/vehicle';
import { VehicleService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    mockVehicles: MockVehicle[] = [];
    itemData: boolean = false;
    isLoading: boolean = true;
    constructor (private vehicleServices: VehicleService) {
        this.getCars();
    }
    private getCars(): void {
        this.vehicleServices.getVehicleLayouts().pipe(
          delay(2000),
          ).subscribe(
                (arg : MockVehicle[]) => {
                    this.mockVehicles = arg;
                    this.itemData = true;
                    this.isLoading = false;
                });
    }
}

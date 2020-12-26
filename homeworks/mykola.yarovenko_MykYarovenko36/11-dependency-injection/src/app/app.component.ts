import { Component } from '@angular/core';

import { delay } from 'rxjs/operators';
import { Mock_Vehicles } from './models/vehicles';
import { CarsService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    cars: Mock_Vehicles[] = [];
    itemData: boolean = false;
    isLoading: boolean = true;
    constructor (private carsServices: CarsService) {
        this.getCars();
    }
    private getCars(): void {
        this.carsServices.getCars().pipe(
          delay(2000),
          ).subscribe(
                (arg : Mock_Vehicles[]) => {
                    this.cars = arg;
                    this.itemData = true;
                    this.isLoading = false;
                });
    }
}

import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Vehicle } from './models';
import { VehicleService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'vehicles';

    public vehicles: Vehicle[] = [];
    public isLoading = false;
    constructor(private carService: VehicleService) { }

    ngOnInit(): void {
        this.carService.getVehicles()
            .pipe(finalize(() => this.isLoading = true))
            .subscribe((vehicles) => { this.vehicles = vehicles });
    }

}

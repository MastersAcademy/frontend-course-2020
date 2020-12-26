import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { Vehicle } from './models/';
import { VehicleService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vehicle';
  vehicles: Vehicle[] = [];
  areVehiclesLoading: boolean = false;

  constructor(private vehicleService: VehicleService) {
    this.getVehicles();
  }

  private getVehicles(): void {
    this.vehicleService.getVehicles()
      .pipe(finalize(() => this.areVehiclesLoading = true))
      .subscribe((vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
      });
  }
}

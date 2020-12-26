import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';

import {Vehicle} from './models/vehicle.model';
import {VehicleService} from './services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles: Vehicle[] = [];
  isLoading: boolean = true;

  constructor(
    private vehicleService: VehicleService,
  ) {
    this.getVehicles();
  }

  private getVehicles(): void {
    this.vehicleService.getVehicles()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
      });
  }
}

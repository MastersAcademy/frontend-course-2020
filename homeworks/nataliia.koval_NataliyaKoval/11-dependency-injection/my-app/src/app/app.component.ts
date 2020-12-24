import { Component } from '@angular/core';
import { VehicleService } from './services';

import { Vehicle } from './interfaces/vehicle.interface';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vehicles: Vehicle[] = [];
  areVehicleLoading: boolean = false;

  constructor(private vehicleService: VehicleService) {
    this.getVehicles();
  }

  private getVehicles(): void {
    console.log('getVehicles call');
    this.areVehicleLoading = true;
    
    this.vehicleService.getVehicle()
      .pipe(finalize(() => this.areVehicleLoading = false))
      .subscribe((vehicles: Vehicle[]) => {
      
      this.vehicles = vehicles;
      console.log('getVehicles ended');
    });
  }
}

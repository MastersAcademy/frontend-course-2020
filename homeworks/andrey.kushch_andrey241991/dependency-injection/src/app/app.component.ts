import { Component } from '@angular/core';
import { VehicleService } from './services';
import { Vehicle } from './models/vechicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vehicles: Vehicle[] = [];
  areVehicleLoading = false;

  constructor(private vehicleService: VehicleService) {
    this.setVehicleLoading(true);
    this.getVehicles();
  }

  setVehicleLoading(isLoading: boolean): void {
    this.areVehicleLoading = isLoading;
  }

  private getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
      this.setVehicleLoading(false);
    });
  }
}

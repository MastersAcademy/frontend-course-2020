import { Component } from '@angular/core';
import { VehicleService } from './services';
import { Vehicle } from './models/vechicle';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vehicles: Vehicle[] = [];
  isVehicleLoading = false;
  subscription: Subscription = null;

  constructor(
    private vehicleService: VehicleService) {
    this.setVehicleLoading(true);
    this.getVehicles();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  setVehicleLoading(isLoading: boolean): void {
    this.isVehicleLoading = isLoading;
  }

  private getVehicles(): void {
    this.subscription =  this.vehicleService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
      this.setVehicleLoading(false);
    });
  }
}

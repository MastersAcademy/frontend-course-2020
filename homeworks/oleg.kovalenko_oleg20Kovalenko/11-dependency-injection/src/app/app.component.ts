import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Vehicles } from './models';
import { VehicleService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dependency-injection';

  vehicles: Vehicles[] = [];

  vehiclesLoading: boolean = false;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  private getVehicles(): void {
    this.vehiclesLoading = true;
    this.vehicleService
      .getVehicles()
      .pipe(finalize(() => (this.vehiclesLoading = false)))
      .subscribe((vehicles: Vehicles[]) => {
        this.vehicles = vehicles;
      });
  }
}

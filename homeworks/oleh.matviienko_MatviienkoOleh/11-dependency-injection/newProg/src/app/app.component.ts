import { Component } from '@angular/core';
import { VehicleService } from './services';
import { Vehicle } from './models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayOfVehicles: Vehicle[] = [];
  areVehiclesLoading: boolean = false;

  constructor(private vehiclesService: VehicleService) {
    this.getVehicle();
  }

  private getVehicle(): void {
    this.areVehiclesLoading = true;
    this.vehiclesService.getVehicle()
    .pipe(finalize(() => this.areVehiclesLoading = false))
    .subscribe((vehicles: Vehicle[]) => this.arrayOfVehicles = vehicles);
  }
}

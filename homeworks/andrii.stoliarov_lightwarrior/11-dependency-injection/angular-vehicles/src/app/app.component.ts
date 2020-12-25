import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Vehicle } from './models/vehicle.model';
import { ListVehiclesService } from './services/list-vehicles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  vehicles: Vehicle[] = [];

  loaded: boolean = false;

  constructor(private listVehiclesService: ListVehiclesService) {
    this.getVehicles();
  }

  private getVehicles(): void {
    this.loaded = true;
    this.listVehiclesService.getVehicles()
      .pipe(finalize(() => this.loaded = false))
      .subscribe((vehicles: Vehicle[]) => this.vehicles = vehicles);
  }
}

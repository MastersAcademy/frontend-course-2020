import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Vehicle } from './interfaces/vehicle';
import { ListVehiclesService } from './services/list-vehicles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vehicles: Vehicle[] = [];

  loading: boolean = false;

  constructor(private listVehiclesService: ListVehiclesService) {
    this.getVehicles();
  }

  private getVehicles(): void {
    this.loading = true;
    this.listVehiclesService.getVehicles()
      .pipe(finalize(() => this.loading = false))
      .subscribe((vehicles: Vehicle[]) => this.vehicles = vehicles);
  }
}

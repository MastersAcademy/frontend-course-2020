import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import {Vehicle} from '../vehicle/models/vehicle.model';
import {VehicleService} from './services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent {
  public vehicles$: Observable<Vehicle[]>;
  isLoading: boolean = true;

  constructor(
    private vehicleService: VehicleService,
  ) {
    this.vehicles$ = this.getVehicles();
  }

  private getVehicles(): Observable<Vehicle[]> {
    return this.vehicleService.getVehicles().pipe(
      finalize(() => this.isLoading = false)
    );
  }
}

import { Component } from '@angular/core';
import { VehicleService } from '../services'

import { Vehicle } from "../models/vehicle.model";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  vehicles: Vehicle[] = [];

  areVehicleLoading: boolean = false;

  constructor(private vehicleService: VehicleService) {
    this.getVehicle();
  }

  private getVehicle(): void {
    this.areVehicleLoading = true;

    this.vehicleService.getVehicle()
      .pipe(finalize( () => this.areVehicleLoading = false) )
      .subscribe(( vehicle: Vehicle[] ) => this.vehicles = vehicle);
  }

}

import { Component } from '@angular/core';
import { VehicleService } from '../services'

import { Vehicle } from "../models/vehicle.interface";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  vehicles: Vehicle[] = [];

  isVehicleLoading: boolean = false;

  constructor(private vehicleService: VehicleService) {
    this.getVehicle();
  }

  private getVehicle(): void {
    this.isVehicleLoading = true;

    this.vehicleService.getVehicle()
      .pipe(finalize( () => this.isVehicleLoading = false) )
      .subscribe(( vehicle: Vehicle[] ) => this.vehicles = vehicle);
  }

}

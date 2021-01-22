import { Component } from '@angular/core';
import { VehicleService } from '../services'

import { Vehicle } from "../models/vehicle.interface";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  public vehicles$: Observable<Vehicle[]>;
  public loading$: Observable<boolean>;

  constructor(private vehicleService: VehicleService) {
    this.vehicles$ = this.getVehicle();
    this.loading$ = this.trackLoading();
  }

  private getVehicle(): Observable<Vehicle[]> {
    return this.vehicleService.getVehicle()
  }

  private trackLoading(): Observable<boolean> {
    return this.vehicles$.pipe(map(() => false), startWith(true))
  }

}


import {Component} from '@angular/core';
import {VehicleService} from '../services'

import {Vehicle} from "../models/vehicle.interface";
import {map} from "rxjs/operators";
import {Observable, merge, of} from "rxjs";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  // vehicles: Vehicle[] = [];

  isVehicleLoading: object;

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
    return merge(
      of(true),
      this.vehicles$.pipe(
        map((vehicles: Vehicle[]) => {
            console.log(vehicles);
            return false
          }
        )
      )
    );
  }

}


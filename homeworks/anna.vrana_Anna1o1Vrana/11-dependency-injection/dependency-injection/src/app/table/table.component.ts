import {Component} from '@angular/core';
import {VehicleService} from '../services'

import {Vehicle} from "../models/vehicle.interface";
import { map } from "rxjs/operators";
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
    // this.loading$ = false;
  }


  // private setVehicleLoading() {
  //   return this.isVehicleLoading = merge(
  //     of(true),
  //     this.vehicles$.pipe(map((() => false))
  //     ))
  // }

  private getVehicle(): Observable<Vehicle[]> {
    return this.vehicleService.getVehicle()
  }

  private isLoading = this.loading$ = merge(
    of(true),
    this.vehicles$.pipe(map(() => false))
  )
}


// private getVehicle(): Observable<Vehicle[]> { // ховаємо лоадер, незважаючи на помилки
//   console.time()
//   this.isVehicleLoading = true; // показуємо лоадер
//   return this.vehicleService.getVehicle().pipe(
//
//     finalize(() => {
//         console.log('started');
//         this.isVehicleLoading = false;
//         console.timeEnd();
//       },
//     )
//   )
// }


// isVehicleLoading: boolean = false;
// public vehicles$: Observable<Vehicle[]>;
//
// constructor(private vehicleService: VehicleService) {
//   this.vehicles$ = this.getVehicle();
//   this.checkVehicleLoading(true);
// }
//
// checkVehicleLoading(isLoading: boolean): void {
//   this.isVehicleLoading = isLoading;
// }
//
// private getVehicle(): Observable<Vehicle[]> {
//   this.isVehicleLoading = true;
//
//   return this.vehicleService.getVehicle().pipe(
//     tap(() => this.checkVehicleLoading(false))
//     // finalize(() => this.isVehicleLoading = false)
//   );
// }

// vehicles: Vehicle[] = [];
//
// isVehicleLoading: boolean = false;

// constructor(private vehicleService: VehicleService) {
//   this.getVehicle();
// }

// private getVehicle(): void {
//   this.isVehicleLoading = true;
//
//   this.vehicleService.getVehicle()
//     .pipe(finalize( () => this.isVehicleLoading = false) )
//     .subscribe(( vehicle: Vehicle[] ) => this.vehicles = vehicle);
// }


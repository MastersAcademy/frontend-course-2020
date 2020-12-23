import {Component, OnInit} from '@angular/core';

import {Vehicle} from './models';
import {VehiclesService} from "./services";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  ngOnInit() {
    this.getVehicles();
  }

  constructor(
    private vehiclesService: VehiclesService,
  ) {
  }

  loader: boolean = true;
  vehicles: Vehicle[] = [];

  private getVehicles(): any {
    this.vehiclesService.getCar()
      .pipe(finalize(() => this.loader = false))
      .subscribe((vehicles) => {
        this.vehicles = vehicles;
      })
  }
}

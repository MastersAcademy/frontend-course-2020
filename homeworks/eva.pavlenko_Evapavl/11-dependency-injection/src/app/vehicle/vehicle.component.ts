import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Vehicle } from "../models/vehicle";
import { VehiclesService } from "../services";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[] = [];
  areVehicleLoading: boolean = false;

  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.areVehicleLoading = true;
    this.vehiclesService.getVehicles()
      .pipe(finalize(() => this.areVehicleLoading = false))
      .subscribe((vehicles: Vehicle[]) => {
        console.log(vehicles);
        this.vehicles = vehicles;
      })
  }
}

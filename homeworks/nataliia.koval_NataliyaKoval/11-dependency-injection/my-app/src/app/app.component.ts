import { Component, OnInit } from '@angular/core';
import { VehicleService } from './services';

import { Vehicle } from './interfaces/vehicle.interface';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  vehicles: Vehicle[] = [];
  areVehicleLoading: boolean = false;

  constructor(private vehicleService: VehicleService) {
  }
  
  ngOnInit(): void {
    this.getVehicles();
  }
  
  private getVehicles(): void {
    this.areVehicleLoading = true;
    
    this.vehicleService.getVehicle()
      .pipe(finalize(() => this.areVehicleLoading = false))
      .subscribe((vehicles: Vehicle[]) => {
      
      this.vehicles = vehicles;
    });
  }
}

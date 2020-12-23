import { Component } from '@angular/core';
import { VehicleService } from "./services";
import { finalize } from "rxjs/operators";
import { IVehicle } from "./vechicle.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public vehicles: IVehicle[] = [];
  public areLoading: boolean = true;

  constructor(private vehicleService: VehicleService) {
    this.getVehicles();
  }

  private getVehicles(): void {
    this.vehicleService.getVehicles()
      .pipe(
        finalize(() => this.areLoading = false)
      )
      .subscribe((vehicles: IVehicle[]) => {
      this.vehicles = vehicles;
    })
  }
}

import {AfterContentInit, Component} from '@angular/core';
import {VehicleService} from "./services";
import {Vehicle} from "./models/vehicle";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterContentInit {
  title = 'dependency-injection';

  vehicles: Vehicle[];
  areVehiclesLoading: boolean;

  constructor(private vehicleService: VehicleService) {
  }

  ngAfterContentInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.areVehiclesLoading = true;
    this.vehicleService.getVehicles()
      .pipe(finalize(() => this.areVehiclesLoading = false))
      .subscribe(value => {
          this.vehicles = value;
        }
      );
  }
}

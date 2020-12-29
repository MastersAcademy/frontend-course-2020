import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Vehicle } from './interfaces/vehicle';
import { ListVehiclesService } from './services/list-vehicles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  vehicles: Vehicle[] = [];

  private subscription: Subscription;

  loading: boolean = false;

  constructor(private listVehiclesService: ListVehiclesService) {
    this.subscription = this.getVehicles();
  }

  private getVehicles(): Subscription {
    this.loading = true;
    return this.listVehiclesService.getVehicles()
      .pipe(finalize(() => this.loading = false))
      .subscribe((vehicles: Vehicle[]) => this.vehicles = vehicles);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

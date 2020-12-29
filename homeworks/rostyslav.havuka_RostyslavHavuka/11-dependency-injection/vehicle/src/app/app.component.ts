import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Car } from './model';
import { CarService } from './services/car.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  areUsersLoading: boolean = false;
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getCars();
  }

  private getCars(): void {
    this.areUsersLoading = true;

    this.carService.getVechicles()
      .pipe(finalize(() => this.areUsersLoading = false))
      .subscribe((cars) => {
        this.cars = cars;
      })
  }

}

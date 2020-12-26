import { Component } from '@angular/core';
import { MOCK_VEHICLES } from './mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public arrayOfVehicle: any = MOCK_VEHICLES;

  constructor() {
    console.log(this.arrayOfVehicle);
  }
}

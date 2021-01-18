import { Component, Input } from '@angular/core';
import { Vehicle } from './models/vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  @Input() vehicle !: Vehicle;
}

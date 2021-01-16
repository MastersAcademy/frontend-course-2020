import { Component, OnInit, Input } from '@angular/core';

import { Vehicle } from '../../../models/';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit(): void {}
}

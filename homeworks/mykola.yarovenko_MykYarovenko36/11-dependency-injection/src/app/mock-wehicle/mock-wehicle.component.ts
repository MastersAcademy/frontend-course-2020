import { Component, Input, OnInit } from '@angular/core';
import { Mock_Vehicles } from '../models/vehicles';
import { TransformAdressPipe } from '../pipes';

@Component({
  selector: 'app-mock-wehicle',
  templateUrl: './mock-wehicle.component.html',
  styleUrls: ['./mock-wehicle.component.scss']
})
export class MockWehicleComponent implements OnInit {
  @Input() car!: Mock_Vehicles;
  subscribeURL!: string;
  carItem !: Mock_Vehicles;

  constructor(private transformAdressPipe: TransformAdressPipe) {
  }

  ngOnInit(): void {
    this.carItem = this.car;
    this.subscribeURL = this.transformAdressPipe.transform(`${this.carItem.manufacturer}+${this.carItem.model}`);
  }
}

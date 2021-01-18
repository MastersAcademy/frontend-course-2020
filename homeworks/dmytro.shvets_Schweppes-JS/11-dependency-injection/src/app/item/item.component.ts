import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../models/Car';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() car: Car;

  constructor() {}

  ngOnInit(): void {
  }

}

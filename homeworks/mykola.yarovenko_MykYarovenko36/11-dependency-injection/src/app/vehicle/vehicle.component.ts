import { Component, Input, OnInit } from '@angular/core';
import { MockVehicle } from '../models/vehicle';
import { CardDescriptionPipe } from '../pipes';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
    @Input() vehicle!: MockVehicle;
    subscribeURL!: string[];
    vehicleItem !: MockVehicle;
    cardDescription: string = '';

    constructor(
        private cardDescriptionPipe: CardDescriptionPipe
    ) {}

    ngOnInit(): void {
        this.vehicleItem = this.vehicle;
        this.subscribeURL = [this.vehicleItem.post.protocol, `${this.vehicleItem.manufacturer}+${this.vehicleItem.model}`];
        this.cardDescription = this.cardDescriptionPipe.transform([this.vehicleItem.manufacturer, this.vehicleItem.model, this.vehicleItem.fuel]);
    }
}


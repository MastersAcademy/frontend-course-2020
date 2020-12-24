import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models';


@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})

export class VehicleComponent {
    @Input() vehicles: Vehicle[]
}

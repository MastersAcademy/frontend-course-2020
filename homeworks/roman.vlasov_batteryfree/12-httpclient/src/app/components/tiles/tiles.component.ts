import { Component, Input } from '@angular/core';
import { User } from '../../models';

@Component({
    selector: 'app-tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.css']
})
export class TilesComponent {
    @Input() users: User[] = [];
}

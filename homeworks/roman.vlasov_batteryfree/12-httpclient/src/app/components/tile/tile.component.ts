import { Component, Input } from '@angular/core';
import { User } from '../../models';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.css']
})
export class TileComponent {
    @Input() user: User;
}

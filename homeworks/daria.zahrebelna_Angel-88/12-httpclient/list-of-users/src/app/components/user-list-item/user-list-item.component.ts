import {Component, Input} from '@angular/core';

import {PageUser} from "../../models";

@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
    @Input() item!: PageUser;

    constructor() {
    }

}

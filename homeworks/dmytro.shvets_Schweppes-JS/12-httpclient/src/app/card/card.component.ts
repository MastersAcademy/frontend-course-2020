import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() user: User;

  constructor() { }
}

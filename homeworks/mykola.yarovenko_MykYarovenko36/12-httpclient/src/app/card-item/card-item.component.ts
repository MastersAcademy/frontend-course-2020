import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
    @Input() state!: User;
    photo!: string;
    name!: string;
    id!: number;
    email!: string;
    lastName!: string;

    ngOnInit(): void {
      this.photo = this.state.avatar;
      this.name = this.state.first_name;
      this.id = this.state.id;
      this.email = this.state.email;
      this.lastName = this.state.last_name;
  }
}

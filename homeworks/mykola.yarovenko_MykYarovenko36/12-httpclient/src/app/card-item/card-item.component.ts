import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() itemsState!: User;
  photo!: string;
  name!: string;
  id!: number;
  email!: string;
  lastName!: string;
  constructor() { }

  ngOnInit(): void {
    this.photo = this.itemsState.avatar;
    this.name = this.itemsState.first_name;
    this.id = this.itemsState.id;
    this.email = this.itemsState.email;
    this.lastName = this.itemsState.last_name;
  }
}

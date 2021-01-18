import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppComponent } from '../app.component';
import { ClickEvent } from '../models/event.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cardOption: number[] = [1, 2, 3, 4]

  public selected: string = this.userService.options.params.per_page;

  constructor(
    private userService: UserService,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
  }

  onChange(event: ClickEvent) {
    this.userService.changingCardNumber(event.target.value.toString());
    this.appComponent.sendingRequest();
  }

}

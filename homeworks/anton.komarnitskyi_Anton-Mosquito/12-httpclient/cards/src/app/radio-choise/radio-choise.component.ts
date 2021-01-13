import { Component, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-radio-choise',
  templateUrl: './radio-choise.component.html',
  styleUrls: ['./radio-choise.component.css']
})
export class RadioChoiseComponent{

  @Output('changeQuantityOfCards') changeQuantityOfCards: EventEmitter<any>= new EventEmitter();

  constructor() {}

  public handleChange(event: Event) :void {
    const element = event.target as HTMLInputElement;
    const value: number = Number(element.dataset.info);
    if (element.checked) {
      this.changeQuantityOfCards.emit(value);
    }
   }
}

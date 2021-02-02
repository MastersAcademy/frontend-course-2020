import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent{

  public move(event: MouseEvent) :void {
    const x = - event.clientX / 5;
    const y =  - event.clientY / 5;

    (event.target as HTMLDivElement).style.backgroundPositionX = `${x}px`;
    (event.target as HTMLDivElement).style.backgroundPositionY = `${y}px`;
  }

}

import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({selector: '[appPostFieldVehicles]'})
export class PostFieldVehicles implements AfterViewInit {

  constructor (private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.el.nativeElement.firstChild.lastChild.textContent === 'http') {
      this.el.nativeElement.firstChild.firstChild.style.color = 'red';
      this.el.nativeElement.style.pointerEvents = 'none';
    }
  }
}

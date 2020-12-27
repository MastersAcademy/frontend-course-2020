import { Directive, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';
import { Vehicle } from "../models/vehicle";

@Directive({
  selector: '[changeBackgroundColor]',
  inputs: ['protocol']
})
export class ChangeBackgroundColorDirective implements AfterViewInit {
  @Input('changeBackgroundColor') vehicle: Vehicle | undefined
  protocol: string | undefined;
  uri: string = 'https://www.google.com/search?q=';

  constructor(private el: ElementRef) {}

  getGoogleResult() {
    if (!this.vehicle) return;
    const str = `${this.vehicle.vehicle}`.split(' ').join('+');
    return encodeURI(`${this.uri}${str}`);
  }

  ngAfterViewInit() {
    if (this.protocol === 'http') {
      this.el.nativeElement.style.backgroundColor = '#AA0000';
      this.el.nativeElement.classList.add('no-clicks');
    }
  }

  @HostListener('click')
  onMouseClick(): void {
    window.open(this.getGoogleResult());
  }
}

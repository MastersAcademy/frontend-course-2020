import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {Vehicle} from "../models/vehicle";

@Directive({selector: '[appLinkActive]'})
export class LinkActiveDirective implements AfterViewInit {
  @Input() appLinkActive: Vehicle;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.appLinkActive.post.protocol !== 'http') {
      this.el.nativeElement.href = `https://www.google.com/search?q=${this.appLinkActive.vehicle.trim().replace(' ', '+')}`;
    }
  }
}

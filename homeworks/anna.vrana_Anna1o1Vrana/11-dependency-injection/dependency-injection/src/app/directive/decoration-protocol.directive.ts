import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { Vehicle } from "../models/vehicle.interface";

@Directive({selector: '[appDecorationProtocol]'})

export class DecorationProtocolDirective {
  @Input('appDecorationProtocol')
  private vehicle: Vehicle;

  constructor(
    private render: Renderer2,
    private el: ElementRef,
  ) {}


  ngAfterViewInit(): void {
    if( this.vehicle.post.protocol === 'http') {
      this.render.addClass(this.el.nativeElement, 'protocol-http');
    }
  }
}

import {Directive, Renderer2, ElementRef, Input} from '@angular/core';
import {Vehicle} from "../models/vehicle.interface";

@Directive({selector: '[appDecorationProtocol]'})

export class DecorationProtocolDirective {
  @Input() appDecorationProtocol: string;
  private readonly vehicle: Vehicle

  constructor(
    private render: Renderer2,
    private el: ElementRef,
  ) {}


  ngAfterViewInit(): void {
    if( this.el.nativeElement.innerHTML === 'http'){
      this.render.addClass(this.el.nativeElement, 'protocol-http');
    }
  }
}

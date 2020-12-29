import { AfterViewInit, Directive, ElementRef, Renderer2, Input, ContentChild } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';
import { PostFieldProtocol } from './post-field-protocol.directive';

@Directive({selector: '[appPostFieldVehicles]'})
export class PostFieldVehicles implements AfterViewInit {

  @Input('appPostFieldVehicles')
  private readonly vehicle: Vehicle;

  @ContentChild(PostFieldProtocol)
  private readonly protocolDirective: PostFieldProtocol;

  constructor (
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    if (this.vehicle.post.protocol !== 'http') return;
      this.protocolDirective.highlight();
      this.renderer.removeAttribute(this.el.nativeElement, 'href');
  }

}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({selector: '[appPostFieldProtocol]'})
export class PostFieldProtocol {

  constructor (
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
    ) {}

  public highlight(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
}


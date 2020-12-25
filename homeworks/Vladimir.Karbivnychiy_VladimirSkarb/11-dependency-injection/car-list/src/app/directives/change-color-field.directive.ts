import {
  Directive,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Directive({selector: '[appChangeColorField]'})
export class ChangeColorFieldDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const protocol: string = this.el.nativeElement.children[1].innerText;
    if (protocol === 'http') {
      this.el.nativeElement.children[0].style.color = 'red';
      this.el.nativeElement.style.pointerEvents = 'none'
    }
  }
}

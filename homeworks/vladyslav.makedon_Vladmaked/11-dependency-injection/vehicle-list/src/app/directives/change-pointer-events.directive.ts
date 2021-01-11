import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({selector: '[appChangePointerEvents]'})
export class ChangePointerEventsDirective implements AfterViewInit {
  @Input() appChangePointerEvents?: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.appChangePointerEvents === 'http') {
      this.el.nativeElement.style.pointerEvents = 'none';
    }
  }
}

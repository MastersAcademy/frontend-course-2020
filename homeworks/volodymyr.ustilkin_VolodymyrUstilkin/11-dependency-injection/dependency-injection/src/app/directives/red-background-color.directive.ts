import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({selector: '[appRedBackgroundColor]'})
export class RedBackgroundColorDirective implements AfterViewInit {
  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.element.nativeElement.innerHTML === 'http') {
      this.element.nativeElement.style.backgroundColor = '#F00';
    }
  }
}

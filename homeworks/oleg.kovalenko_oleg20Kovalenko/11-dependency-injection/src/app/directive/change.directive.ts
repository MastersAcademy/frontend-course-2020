import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChange]',
})
export class ChangeDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.el.nativeElement.lastChild.textContent === 'http') {
      this.el.nativeElement.style.color = 'red';
    }
  }
}

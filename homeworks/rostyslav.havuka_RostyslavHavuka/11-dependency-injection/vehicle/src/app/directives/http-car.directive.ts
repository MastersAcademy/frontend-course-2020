import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[http]'
})

export class ChangeHttp implements AfterViewInit {
  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.element.nativeElement.lastChild.textContent === 'http') {
      this.element.nativeElement.style.color = 'red';
      this.element.nativeElement.style.pointerEvents = 'none';
      this.element.nativeElement.style.textDecoration = 'none';
      this.element.nativeElement.lastChild.style.textDecoration = 'none';
    } else {
      this.element.nativeElement.style.color = 'green';
      this.element.nativeElement.style.textDecoration = 'none';
      this.element.nativeElement.lastChild.style.textDecoration = 'none';
    }
  }

}


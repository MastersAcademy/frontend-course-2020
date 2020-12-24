import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[http]'
})

export class ChangeHttp implements AfterViewInit {
  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.element.nativeElement.firstChild.innerText === 'Added from http') {
      this.element.nativeElement.firstChild.style.color = 'red';
      this.element.nativeElement.style.pointerEvents = 'none'
    }
  }
}


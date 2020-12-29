import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[http]'
})

export class ChangeHttp implements AfterViewInit {
  @Input() http!: HTMLElement;
  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.http.innerText === 'Added from http') {
      this.http.style.color = 'red';
      this.element.nativeElement.style.pointerEvents = 'none'
    }
  }
}


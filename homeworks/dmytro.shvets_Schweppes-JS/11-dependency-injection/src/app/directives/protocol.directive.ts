import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appProtocol]'
})
export class ProtocolDirective implements AfterViewInit {

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
    const protocol: string = this.element.nativeElement.children[1].textContent;
    if (protocol === 'http') {
      this.element.nativeElement.children[0].classList.add('highlight');
      this.element.nativeElement.parentElement.parentElement.classList.add('disabled');
    }
  }

}

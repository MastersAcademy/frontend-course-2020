import {Directive, ElementRef, Input} from '@angular/core';

@Directive({selector: '[appDecorationProtocol]'})
export class DecorationProtocolDirective {
  @Input() appDecorationProtocol: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if(this.el.nativeElement.innerHTML === 'http'){
      this.el.nativeElement.style.color = '#FA0202'
    }
  }
}

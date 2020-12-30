import {
  Input,
  Directive,
  AfterViewInit,
} from '@angular/core';

@Directive({selector: '[appChangeLinkColor]'})
export class ChangeLinkColorDirective implements AfterViewInit {

  @Input('appChangeLinkColor') el: HTMLAnchorElement

  ngAfterViewInit() {
    const protocolNode = this.el.querySelector('.vehicle-list__vehicle-item-protocol');
    if (protocolNode.innerHTML === 'http') {
      protocolNode.setAttribute('style', 'color: red');
      this.el.removeAttribute('href');
    }
  }
}

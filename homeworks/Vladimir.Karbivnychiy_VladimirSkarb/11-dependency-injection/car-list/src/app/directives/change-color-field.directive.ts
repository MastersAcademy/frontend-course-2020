import {
  Directive,
  ElementRef,
  AfterViewInit, Input,
} from '@angular/core';

@Directive({selector: '[appChangeColorField]'})
export class ChangeColorFieldDirective implements AfterViewInit {

  @Input('appChangeColorField') link: HTMLAnchorElement | undefined

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const protocol: string | undefined = this.link?.children[1].innerHTML;
    if (protocol === 'http') {
      this.link?.children[0].setAttribute('style', 'color: red');
      this.link?.setAttribute('style', 'pointer-events: none');
    }
  }
}

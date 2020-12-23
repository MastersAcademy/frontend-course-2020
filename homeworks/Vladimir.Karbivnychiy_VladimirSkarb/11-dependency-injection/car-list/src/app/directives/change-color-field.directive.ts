import {
  Directive,
  ElementRef,
  AfterViewInit,
  Input,
  HostListener
} from '@angular/core';
import {Vehicle} from "../models";

@Directive({selector: '[appChangeColorField]'})
export class ChangeColorFieldDirective implements AfterViewInit {
  @Input('appChangeColorField') vehicle: Vehicle | undefined

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const protocol: string = this.el.nativeElement.children[1].innerHTML;
    if (protocol === 'http') {
      this.el.nativeElement.children[0].style.color = 'red';
      this.el.nativeElement.classList.add('no-link');
    }
  }

  @HostListener('click')
  onMouseClick(): void {
    window.open(`https://www.google.com/search?q=${this.vehicle?.manufacturer}+${this.vehicle?.model}`, '_blank')
  }
}

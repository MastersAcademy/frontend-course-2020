import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
import { Vechicles } from '../models';

@Directive({selector: '[appChangeColor]'})
export class ChangeColorDirective implements AfterViewInit {
  @Input() appChangeColor!: Vechicles;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement
    const attribute: string = this.el.nativeElement.nextElementSibling.innerText;
    if (attribute === 'http') {
      element.classList.add('red');
    } else {
      element.closest('.list').classList.add('transport');
    }
  }

}

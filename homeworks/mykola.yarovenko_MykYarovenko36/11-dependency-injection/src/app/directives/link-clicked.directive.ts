import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[protocol]' })

export class LinkClicked implements AfterViewInit {

  @Input() protocol!: string;
  constructor (private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.protocol === 'https' ? this.el.nativeElement.style.color = "red" : this.el.nativeElement.style.color = "green";
   }
}

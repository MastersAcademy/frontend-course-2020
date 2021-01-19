import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({selector: '[appChangeColor]'})
export class ChangeColorDirective implements AfterViewInit{
    @Input() appChangeColor?: string;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit(): void {
        if (this.appChangeColor === 'http') {
            this.el.nativeElement.style.color = '#A83B24'
        }
    }
}

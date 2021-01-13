import { Directive, AfterViewInit, Input, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[protocolType]' })
export class LinkColor implements AfterViewInit {
    @Input() protocolType!: string;
    colorRed: string = "#B22222";
    colorGreen: string = "#32CD32";
    constructor(private el: ElementRef) {}
    ngAfterViewInit(): void {
        this.protocolType === 'https' ?
        this.el.nativeElement.style.border = `5px solid ${this.colorGreen}` :
        this.el.nativeElement.style.border =  `5px solid ${this.colorRed}`;
    }
}

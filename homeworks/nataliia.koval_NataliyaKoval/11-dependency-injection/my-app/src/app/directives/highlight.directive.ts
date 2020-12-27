import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements AfterViewInit {
    constructor(private el: ElementRef) {}
        
    ngAfterViewInit(): void {
        if (this.el.nativeElement.lastChild.textContent === 'http') {
            this.el.nativeElement.firstChild.style.backgroundColor = 'red';
        }
    }
}
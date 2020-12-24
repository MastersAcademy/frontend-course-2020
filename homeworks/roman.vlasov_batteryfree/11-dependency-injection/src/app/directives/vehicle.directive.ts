import {
    AfterViewInit,
    Directive,
    Input,
    ElementRef,
    Renderer2
} from '@angular/core';

const pattern = /(^https)/;
const url = 'https://www.google.com/search?q=';

@Directive({
    selector: '[appVehicle]'
})

export class VehicleDirective implements AfterViewInit {

    @Input() appVehicle: string = '';
    @Input() href: string | null = null;


    constructor(private renderer: Renderer2, private elementRef: ElementRef) {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'href', '');
    }

    ngAfterViewInit(): void {
        if (!pattern.test(this.appVehicle)) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#F00');
        }

        if (this.href !== null) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'href',
                `${url}${this.href.replace(/ /g, "+")}`);
            this.renderer.setAttribute(this.elementRef.nativeElement, 'target', '_blank');
        }
    }
}

import {
    AfterViewInit,
    Directive,
    Input,
    ElementRef,
    Renderer2,
    HostListener
} from '@angular/core';

import { Vehicle } from '../models'

const pattern = /(^https)/;
const url = 'https://www.google.com/search?q=';

@Directive({
    selector: '[appVehicle]'
})

export class VehicleDirective implements AfterViewInit {

    @Input() vehicle: Vehicle;
    @Input() protocol: boolean = false;


    constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        if (!pattern.test(this.vehicle.post.protocol) && this.protocol) {
            this.renderer.addClass(this.elementRef.nativeElement, 'block-link');
        }

        if (pattern.test(this.vehicle.post.protocol) && !this.protocol) {
            this.renderer.addClass(this.elementRef.nativeElement, 'item-hover');
        }
    }

    @HostListener('click') onClick(): void {
        if (pattern.test(this.vehicle.post.protocol) && !this.protocol) {
            window.open(this.getURL(), '_blank');
        }
    }

    private getURL(): string {
        const encod: string = this.vehicle.vehicle.replace(/ /g, "+");
        return `${url} ${encod}`
    }
}

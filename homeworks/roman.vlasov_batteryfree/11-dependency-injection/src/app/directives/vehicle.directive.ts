import { AfterViewInit, Directive, Input, ElementRef } from '@angular/core';
const pattern = /(^https)/;

@Directive({
    selector: '[appVehicle]'
})
export class VehicleDirective implements AfterViewInit {

    @Input() appVehicle: string = '';

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        if (!pattern.test(this.appVehicle)) {
            this.elementRef.nativeElement.style.color = 'red';
        }
    }
}

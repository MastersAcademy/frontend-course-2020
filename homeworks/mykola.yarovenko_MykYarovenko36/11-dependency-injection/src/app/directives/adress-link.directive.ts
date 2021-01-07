import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { TransformAdressPipe } from '../pipes';

@Directive({ selector: '[requestData]' })

export class LinkAdress implements AfterViewInit {

  @Input() requestData!: string[];

  constructor (private el: ElementRef, private transformAdressPipe: TransformAdressPipe) {}

  ngAfterViewInit(): void {
    if (this.requestData[0] === 'https') {
        this.el.nativeElement.setAttribute('href', this.transformAdressPipe.transform(this.requestData[1]));
        console.log(this.requestData);
    }
  }
}

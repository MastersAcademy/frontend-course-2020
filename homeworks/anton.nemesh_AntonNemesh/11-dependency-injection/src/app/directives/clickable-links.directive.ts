import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({selector: '[appClickableLinks]'})
export class ClickableLinksDirective implements AfterViewInit {
  currentRow: any;
  currentModel: string = '';

  constructor(private el: ElementRef) {}

  encodeGoogleURL(string: string): string {
    return `https://www.google.com/search?q=${string.split(' ').join('+')}`;
  }

  ngAfterViewInit(): void {
    this.currentRow = this.el.nativeElement as HTMLTableRowElement;
    this.currentModel = this.currentRow.children[1].innerText;

    if (this.currentRow.children[0].innerText === 'http') {
      this.currentRow.children[0].classList.add('red-text');
      [...this.currentRow.children].forEach((el: HTMLTableRowElement) => {
        el.children[0].classList.add('unclickable');
      });
    } else {
      [...this.currentRow.children].forEach((el: any) => {
        el.children[0].href = this.encodeGoogleURL(this.currentModel);
      });
    }
  }
}

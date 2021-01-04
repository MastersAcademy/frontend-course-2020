import { HostListener, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({ selector: '[personOnPage]' })

export class PersonOnPage {
  @Input() personOnPage!: number;
  @HostListener('click')
  getNewPage(): void {
    localStorage.setItem('per_page', `${this.personOnPage}`);
  }
}

import { HostListener, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({ selector: '[currentPage]' })

export class PageNumber {
  @Input() currentPage!: number;
  @HostListener('click')
  getNewPage(): void {
    localStorage.setItem('page', `${this.currentPage}`);
  }
}


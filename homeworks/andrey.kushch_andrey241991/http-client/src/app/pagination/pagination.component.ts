import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Output() currentPageChanged = new EventEmitter<number>();

  get totalPagesAsArray(): number[] {
    return [].constructor(this.totalPages);
  }

  getIsPageActive(index: number): boolean {
    return index + 1 === this.currentPage;
  }

  changeCurrentPage(index: number): void {
    this.currentPageChanged.emit(index + 1)
  }
}

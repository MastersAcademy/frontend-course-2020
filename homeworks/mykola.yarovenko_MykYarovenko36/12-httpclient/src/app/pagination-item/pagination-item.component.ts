import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-item',
  templateUrl: './pagination-item.component.html',
  styleUrls: ['./pagination-item.component.scss']
})
export class PaginationItemComponent {
  @Input() pageNumber!: number;
}

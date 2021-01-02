import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnChanges {
    @Input() totalPages: number = 0;
    @Output() onClick = new EventEmitter<number>();

    public pages: number[] = [];
    public currentPage: number = 1;

    ngOnChanges(changes: SimpleChanges): void {
        this.selectedPage();
    }

    selectPage(page: number): void {
        this.currentPage = page;
        if (page < this.totalPages) this.selectedPage();
        this.onClick.emit(this.currentPage)
    }

    selectedPage(): void {
        let startButton: number = this.currentPage >= 10 ? this.currentPage - 8 : 1;
        let endButton: number = this.totalPages < 10 ? this.totalPages : startButton + 9;
        this.pages = [];
        for (let index = startButton; index <= endButton; index++) {
            this.pages.push(index);
        }
    }

}

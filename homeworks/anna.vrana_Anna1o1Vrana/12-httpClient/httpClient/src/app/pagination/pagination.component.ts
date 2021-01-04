import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  // public page: number;
  // public collectionSize: number;
  // public itemsPerPage: number = 4;




  constructor(

  ) { }

  ngOnInit(): void {
  }

  onPageChanged() {
    // this.loadPage();
  }

}

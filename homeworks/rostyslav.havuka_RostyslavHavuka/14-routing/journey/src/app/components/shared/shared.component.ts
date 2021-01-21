import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})

export class SharedComponent  {
  constructor(private location: Location, private history: HistoryService) {}

  ngOnInit() {
    this.history.showHistory(this.location.path())
    this.history.history();
  }
}

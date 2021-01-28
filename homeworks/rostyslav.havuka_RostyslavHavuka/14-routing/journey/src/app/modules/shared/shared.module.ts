import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from '../../components/shared/shared.component'
import { HistoryService } from 'src/app/services/history.service';


@NgModule({
  declarations: [SharedComponent],

  imports: [
    CommonModule
  ],
  providers: [
    HistoryService
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightsComponent } from './components/copyrights/copyrights.component';


@NgModule({
  declarations: [
    CopyrightsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    CopyrightsComponent
  ]
})
export class SharedModule { }

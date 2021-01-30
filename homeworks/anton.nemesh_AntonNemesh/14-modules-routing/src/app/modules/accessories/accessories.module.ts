import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesPageComponent } from './components/accessories-page/accessories-page.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [AccessoriesPageComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AccessoriesModule { }

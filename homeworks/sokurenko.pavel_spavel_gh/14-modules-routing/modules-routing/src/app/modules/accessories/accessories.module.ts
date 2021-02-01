import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccessoriesComponent } from './components/accessories/accessories.component';



@NgModule({
  declarations: [
    AccessoriesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AccessoriesComponent,
  ]
})
export class AccessoriesModule { }

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesComponent } from './components/accessories/accessories.component';

@NgModule({
  declarations: [AccessoriesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccessoriesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccessoriesComponent } from './components/Accessories/accessories.component';
import { ListComponent } from './components/List/list.component';



@NgModule({
  declarations: [AccessoriesComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccessoriesModule { }

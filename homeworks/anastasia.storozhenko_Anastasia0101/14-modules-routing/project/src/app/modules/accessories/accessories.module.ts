import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesComponent } from './component/accessories/accessories.component';
import { NavigationModule } from '../shared/navigation.module';

@NgModule({
  declarations: [AccessoriesComponent],
  imports: [
    CommonModule,
    NavigationModule
  ]
})
export class AccessoriesModule { }

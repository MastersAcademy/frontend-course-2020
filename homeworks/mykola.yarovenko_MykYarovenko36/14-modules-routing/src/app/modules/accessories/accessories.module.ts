import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AccessoriesModule {}

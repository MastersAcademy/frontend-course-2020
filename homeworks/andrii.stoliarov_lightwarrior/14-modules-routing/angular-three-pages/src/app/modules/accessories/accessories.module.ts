import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccessoriesPageComponent } from './components/accessories-page/accessories-page.component';

@NgModule({
  declarations: [
    AccessoriesPageComponent
  ],
  exports: [
    AccessoriesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]

})
export class AccessoriesModule {
}

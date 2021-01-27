import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccessoriesComponent} from './components/accessories/accessories.component';
import {SharingModule} from "../sharing/sharing.module";

@NgModule({
  declarations: [AccessoriesComponent],
  exports: [AccessoriesComponent],
  imports: [
    CommonModule,
    SharingModule
  ]
})
export class AccessoriesModule {
}

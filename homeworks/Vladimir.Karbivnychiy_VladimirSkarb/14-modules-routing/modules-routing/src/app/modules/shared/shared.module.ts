import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavigateComponent} from "./components/navigate/navigate.component";


@NgModule({
  declarations: [
    NavigateComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigateComponent
  ]

})
export class SharedModule {
}

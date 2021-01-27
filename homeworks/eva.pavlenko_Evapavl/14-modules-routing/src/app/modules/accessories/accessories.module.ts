import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccessoriesComponent } from "./components/accessories/accessories.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  exports: [
    AccessoriesComponent
  ]
})
export class AccessoriesModule { }

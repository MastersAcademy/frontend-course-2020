import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from "./components/home/home.component";
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

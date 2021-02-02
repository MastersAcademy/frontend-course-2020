import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "./navigation.component";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }

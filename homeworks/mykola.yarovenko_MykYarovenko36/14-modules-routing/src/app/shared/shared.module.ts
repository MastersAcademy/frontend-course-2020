import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavListComponent,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavigationModule } from '../shared/navigation.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule
  ]
})
export class HomeModule { }

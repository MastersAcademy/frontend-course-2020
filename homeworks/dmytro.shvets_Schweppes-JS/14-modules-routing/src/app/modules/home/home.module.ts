import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/Home/home.component';
import { FormComponent } from './components/Form/form.component';


@NgModule({
  declarations: [HomeComponent, FormComponent],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule { }

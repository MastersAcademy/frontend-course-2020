import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from '@angular/router';
import { GetstartedComponent } from './getstarted/getstarted.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path : 'getstarted', component : GetstartedComponent},
];

@NgModule({
  declarations: [HomeComponent, GetstartedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [
    HomeComponent,
    GetstartedComponent
  ]
})
export class HomeModule { }

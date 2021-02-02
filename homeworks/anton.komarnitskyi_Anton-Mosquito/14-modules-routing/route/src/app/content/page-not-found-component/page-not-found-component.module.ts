import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponentComponent } from "./page-not-found-component.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component : PageNotFoundComponentComponent}
];

@NgModule({
  declarations: [PageNotFoundComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [
    PageNotFoundComponentComponent
  ]
})
export class PageNotFoundComponentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesComponent } from "./accessories.component";
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', component : AccessoriesComponent},
];

@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [
    AccessoriesComponent
  ]
})
export class AccessoriesModule { }

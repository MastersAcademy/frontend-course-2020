import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from '../accessories/component/accessories/accessories.component';
import { AccountComponent } from '../account/component/account/account.component';
import { HomeComponent } from '../home/component/home/home.component';

const routes: Routes = [
  { path: ':home', component: HomeComponent,},
  { path: ':account', component: AccountComponent},
  { path: ':accessories', component: AccessoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }

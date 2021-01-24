import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'accessories', component: AccessoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { PathGuard } from './guards/path.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [PathGuard]},
  {path: 'home', component: HomeComponent, canActivate: [PathGuard]},
  {path: 'account', component: AccountComponent, canActivate: [PathGuard]},
  {path: 'accessories', component: AccessoriesComponent, canActivate: [PathGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

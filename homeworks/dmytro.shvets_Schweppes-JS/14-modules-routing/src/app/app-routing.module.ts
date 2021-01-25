import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTravelGuard } from './guards/user-action.guard';
import { HomeComponent } from './modules/home/components/Home/home.component';
import { AccountComponent } from './modules/account/components/Account/account.component';
import { AccessoriesComponent } from './modules/accessories/components/Accessories/accessories.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [UserTravelGuard] },
  { path: 'home', component: HomeComponent, canActivate: [UserTravelGuard] },
  { path: 'account', component: AccountComponent, canActivate: [UserTravelGuard] },
  { path: 'accessories', component: AccessoriesComponent, canActivate: [UserTravelGuard] },
  { path: '**', component: HomeComponent, canActivate: [UserTravelGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

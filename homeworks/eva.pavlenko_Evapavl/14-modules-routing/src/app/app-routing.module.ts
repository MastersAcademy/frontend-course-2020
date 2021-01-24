import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./modules/home/components/home/home.component";
import {AccountComponent} from "./modules/account/components/account/account.component";
import {AccessoriesComponent} from "./modules/accessories/components/accessories/accessories.component";
import {LandingComponent} from "./modules/landing/components/landing/landing.component";
import {ValidPathGuard} from "./guards/valid-path.guard";

const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [ValidPathGuard] },
  { path: 'home', component: HomeComponent, canActivate: [ValidPathGuard]},
  { path: 'account', component: AccountComponent, canActivate: [ValidPathGuard] },
  { path: 'accessories', component: AccessoriesComponent, canActivate: [ValidPathGuard] },
  {path: '**', component: LandingComponent, canActivate: [ValidPathGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

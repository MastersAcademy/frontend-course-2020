import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathGuard } from './guards/path.guard';

import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [PathGuard]},
  { path: 'home', component: HomePageComponent, canActivate: [PathGuard] },
  { path: 'account', component: AccountComponent, canActivate: [PathGuard] },
  { path: 'accessories', component: AccessoriesComponent, canActivate: [PathGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

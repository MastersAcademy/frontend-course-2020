import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './modules/home/components/home/home.component';
import {AccountComponent} from './modules/account/components/account/account.component';
import {AccessoriesComponent} from './modules/accessories/components/accessories/accessories.component';

import {BaseGuard} from './guards/base.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [BaseGuard]},
  {path: 'home', component: HomeComponent, canActivate: [BaseGuard]},
  {path: 'account', component: AccountComponent, canActivate: [BaseGuard]},
  {path: 'accessories', component: AccessoriesComponent, canActivate: [BaseGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

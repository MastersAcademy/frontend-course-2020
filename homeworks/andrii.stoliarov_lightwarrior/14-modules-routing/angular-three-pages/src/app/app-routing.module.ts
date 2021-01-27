import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesPageComponent } from './modules/accessories/components/accessories-page/accessories-page.component';
import { AccountPageComponent } from './modules/account/components/account-page/account-page.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { NavigationComponent } from './modules/shared/components/navigation/navigation.component';
import { TransitionGuard } from './guards';

const routes: Routes = [
  {path: '', component: NavigationComponent},
  {path: 'home', component: HomePageComponent, canActivate: [TransitionGuard]},
  {path: 'account', component: AccountPageComponent, canActivate: [TransitionGuard]},
  {path: 'accessories', component: AccessoriesPageComponent, canActivate: [TransitionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

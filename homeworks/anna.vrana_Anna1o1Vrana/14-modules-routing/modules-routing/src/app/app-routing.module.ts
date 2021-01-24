import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./modules/home/components/home/home.component";
import {AccountComponent} from "./modules/account/components/account/account.component";
import {AccessoriesComponent} from "./modules/accessories/components/accessories/accessories.component";
import {RoutingGuard} from "./guard/routing.guard";

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [RoutingGuard]},
  {path: 'account', component: AccountComponent, canActivate: [RoutingGuard]},
  {path: 'accessories', component: AccessoriesComponent, canActivate: [RoutingGuard]},
  {path: '', component: AccessoriesComponent, canActivate: [RoutingGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

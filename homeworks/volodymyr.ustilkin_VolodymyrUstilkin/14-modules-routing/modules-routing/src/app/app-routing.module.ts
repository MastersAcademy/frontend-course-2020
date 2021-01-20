import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/components/home/home.component";
import {UserHistoryGuard} from "./guards/user-history.guard";
import {AccountComponent} from "./modules/account/components/account/account.component";
import {AccessoriesComponent} from "./modules/accessories/components/accessories/accessories.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [UserHistoryGuard]},
  {path: 'account', component: AccountComponent, canActivate: [UserHistoryGuard]},
  {path: 'accessories', component: AccessoriesComponent, canActivate: [UserHistoryGuard]},
  {path: '**', component: HomeComponent, canActivate: [UserHistoryGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./modules/home/components/home/home.component";
import {AccountComponent} from "./modules/account/components/account/account.component";
import {AccessoriesComponent} from "./modules/accessories/components/accessories/accessories.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

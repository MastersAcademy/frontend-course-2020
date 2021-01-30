import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./modules/home/components/home/home.component";
import {JourneyGuard} from "./guards/journey.guard";
import {AccountComponent} from "./modules/account/components/account/account.component";
import {AccessoriesComponent} from "./modules/accessories/components/accessories/accessories.component";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [JourneyGuard]},
  {path: 'home', component: HomeComponent, canActivate: [JourneyGuard]},
  {path: 'account', component: AccountComponent, canActivate: [JourneyGuard]},
  {path: 'accessories', component: AccessoriesComponent, canActivate: [JourneyGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

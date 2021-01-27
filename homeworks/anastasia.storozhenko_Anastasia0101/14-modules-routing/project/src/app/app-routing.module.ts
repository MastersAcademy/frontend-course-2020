import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneyGuard } from './guards/journey.guard';

import { AccessoriesComponent } from './modules/accessories/component/accessories/accessories.component';
import { AccountComponent } from './modules/account/component/account/account.component';
import { HomeComponent } from './modules/home/component/home/home.component';
import { NavigationComponent } from './modules/shared/component/navigation/navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, canActivate: [JourneyGuard]},
  { path: 'home', component: HomeComponent, canActivate: [JourneyGuard]},
  { path: 'account', component: AccountComponent, canActivate: [JourneyGuard]},
  { path: 'accessories', component: AccessoriesComponent, canActivate: [JourneyGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { HomeComponent } from './modules/home/components/home/home.component';

import { TrackingGuard } from './guards/tracking.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full', canActivate: [TrackingGuard] },
  { path: 'home', component: HomeComponent, canActivate: [TrackingGuard] },
  { path: 'account', component: AccountComponent, canActivate: [TrackingGuard] },
  { path: 'accessories', component: AccessoriesComponent, canActivate: [TrackingGuard] },
  { path: '**', component: HomeComponent, canActivate: [TrackingGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

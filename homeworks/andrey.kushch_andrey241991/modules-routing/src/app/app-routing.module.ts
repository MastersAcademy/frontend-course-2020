import { HomeComponent } from './modules/home/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { PathGuard } from './guards/path.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [PathGuard] },
  { path: 'home', component: HomeComponent, canActivate: [PathGuard] },
  { path: 'account', component: AccountComponent, canActivate: [PathGuard] },
  { path: 'accessories', component: AccessoriesComponent, canActivate: [PathGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

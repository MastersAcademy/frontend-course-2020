import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelingGuard } from './services/guards/traveling.guard';
import { CustomPreloadingStrategy } from './services/preloadStrategy/custom-preload-strategy';

const routes: Routes = [
  {path : '', redirectTo : '/home', pathMatch : 'full'},
  {path : 'home', loadChildren: () => import('./content/home/home.module').then(m => m.HomeModule), canActivate : [TravelingGuard]},
  {path : 'account', loadChildren: () => import('./content/account/account.module').then(m => m.AccountModule), canActivate : [TravelingGuard]},
  {path : 'accessories', loadChildren: () => import('./content/accessories/accessories.module').then(m => m.AccessoriesModule), canActivate : [TravelingGuard]},
  {path : '**', data: {nopreload : true}, loadChildren: () => import('./content/page-not-found-component/page-not-found-component.module').then(m => m.PageNotFoundComponentModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

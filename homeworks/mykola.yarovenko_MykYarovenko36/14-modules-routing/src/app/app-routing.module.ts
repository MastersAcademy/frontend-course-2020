import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathGuard } from './guards/path.guard';

import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AcountComponent } from './modules/acount/components/acount/acount.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [PathGuard]},
  { path: 'home', component: HomePageComponent, canActivate: [PathGuard] },
  { path: 'acount', component: AcountComponent, canActivate: [PathGuard] },
  { path: 'accessories', component: AccessoriesComponent, canActivate: [PathGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrectPathGuard } from './guards/correct-path.guard';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { HomeComponent } from './modules/home/components/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [CorrectPathGuard]},
  { path: 'home', component: HomeComponent, canActivate: [CorrectPathGuard]},
  { path: 'account', component: AccountComponent, canActivate: [CorrectPathGuard]},
  { path: 'accessories', component: AccessoriesComponent, canActivate: [CorrectPathGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

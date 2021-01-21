import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { HomeComponent } from './modules/home/components/home/home.component';

import { TransitionHistoryGuard } from './guards/transition-history.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [TransitionHistoryGuard] },
    { path: 'account', component: AccountComponent, canActivate: [TransitionHistoryGuard] },
    { path: 'accessories', component: AccessoriesComponent, canActivate: [TransitionHistoryGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

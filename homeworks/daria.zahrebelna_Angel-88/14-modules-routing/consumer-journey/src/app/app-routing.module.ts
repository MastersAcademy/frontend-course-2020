import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainGuard} from "./guards/main.guard";
import {HomeComponent} from "./modules/home/components/home/home.component";
import {AccountComponent} from "./modules/account/components/account/account.component";
import {AccessoriesComponent} from "./modules/accessories/components/accessories/accessories.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [MainGuard]},
    {path: 'home', component: HomeComponent, canActivate: [MainGuard]},
    {path: 'account', component: AccountComponent, canActivate: [MainGuard]},
    {path: 'accessories', component: AccessoriesComponent, canActivate: [MainGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

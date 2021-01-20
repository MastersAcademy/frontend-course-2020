import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./modules/home/components/home-page/home-page.component";
import { AccessoriesPageComponent } from "./modules/accessories/components/accessories-page/accessories-page.component";
import { AccountPageComponent } from "./modules/account/components/account-page/account-page.component";
import { JourneyGuard } from "./guards/journey.guard";

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [JourneyGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [JourneyGuard] },
  { path: 'accessories', component: AccessoriesPageComponent, canActivate: [JourneyGuard] },
  { path: 'account', component: AccountPageComponent, canActivate: [JourneyGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

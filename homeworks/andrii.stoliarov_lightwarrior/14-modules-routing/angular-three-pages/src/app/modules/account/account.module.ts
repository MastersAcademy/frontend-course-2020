import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountPageComponent } from './components/account-page/account-page.component';

@NgModule({
  declarations: [
    AccountPageComponent
  ],
  exports: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccountModule {
}

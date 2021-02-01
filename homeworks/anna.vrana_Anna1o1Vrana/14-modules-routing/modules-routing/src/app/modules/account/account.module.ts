import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountComponent} from './components/account/account.component';
import {SharingModule} from "../sharing/sharing.module";

@NgModule({
  declarations: [AccountComponent],
  exports: [AccountComponent],
  imports: [
    CommonModule,
    SharingModule
  ]
})
export class AccountModule {
}

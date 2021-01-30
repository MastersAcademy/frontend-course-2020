import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { AccountComponent } from '../../components/account/account.component'


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }

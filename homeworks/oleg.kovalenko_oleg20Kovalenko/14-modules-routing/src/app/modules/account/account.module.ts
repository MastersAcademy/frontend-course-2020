import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }

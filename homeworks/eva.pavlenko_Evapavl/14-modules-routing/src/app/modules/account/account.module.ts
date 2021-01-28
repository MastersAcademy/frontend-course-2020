import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from "./components/account/account.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }

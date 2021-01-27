import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './component/account/account.component';
import { NavigationModule } from '../shared/navigation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule
  ]
})
export class AccountModule { }

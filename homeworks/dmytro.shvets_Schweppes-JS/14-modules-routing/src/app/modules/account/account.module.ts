import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './components/Account/account.component';
import { InfoComponent } from './components/Info/info.component';



@NgModule({
  declarations: [AccountComponent, InfoComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccountModule { }

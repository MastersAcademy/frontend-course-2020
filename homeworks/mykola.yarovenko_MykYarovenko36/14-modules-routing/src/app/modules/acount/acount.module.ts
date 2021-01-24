import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcountComponent } from './components/acount/acount.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AcountComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AcountModule {}

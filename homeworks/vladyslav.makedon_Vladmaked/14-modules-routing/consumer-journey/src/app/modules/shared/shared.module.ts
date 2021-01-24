import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/navigation/navigation.component';
import {AppRoutingModule} from '../../app-routing.module';


@NgModule({
  declarations: [NavigationComponent],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule {
}

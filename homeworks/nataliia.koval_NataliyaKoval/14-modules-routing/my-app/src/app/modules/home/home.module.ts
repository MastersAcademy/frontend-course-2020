import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule{
}

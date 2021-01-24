import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        NavigationComponent
    ]
})
export class SharedModule { }

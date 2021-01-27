import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavigationComponent,
        RouterModule
    ]
})

export class SharedModule {
}

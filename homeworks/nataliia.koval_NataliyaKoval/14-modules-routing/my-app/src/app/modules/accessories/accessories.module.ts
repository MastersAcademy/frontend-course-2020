import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccessoriesComponent } from './components/accessories/accessories.component';


@NgModule({
    declarations: [
        AccessoriesComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        AccessoriesComponent
    ]
})

export class AccessoriesModule{
}

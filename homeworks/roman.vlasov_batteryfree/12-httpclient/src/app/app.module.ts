import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appServices } from './services';

import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserInterceptor } from './interceptors/user.interceptor'

@NgModule({
    declarations: [
        AppComponent,
        TileComponent,
        TilesComponent,
        PaginationComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [
        ...appServices,
        { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

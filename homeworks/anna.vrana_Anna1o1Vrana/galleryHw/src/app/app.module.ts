import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgListComponent } from './img-list/img-list.component';
import { PictureComponent } from './picture/picture.component';
import { SelectedPictureComponent } from './selected-picture/selected-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgListComponent,
    PictureComponent,
    SelectedPictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

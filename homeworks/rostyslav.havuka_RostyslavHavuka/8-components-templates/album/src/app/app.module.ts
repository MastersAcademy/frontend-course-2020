import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component'
import { FormsModule } from '@angular/forms';
import { ShowImageComponent } from './show-image/show-image.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ShowImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

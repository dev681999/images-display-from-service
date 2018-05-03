import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule, MatToolbarModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { RetriveImageListService } from './retrive-image-list.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [ RetriveImageListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

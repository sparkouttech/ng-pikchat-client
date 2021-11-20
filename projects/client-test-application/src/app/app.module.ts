import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgPikchatClientModule } from "ng-pikchat-client";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPikchatClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

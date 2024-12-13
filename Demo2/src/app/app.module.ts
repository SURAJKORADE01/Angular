import { NgModule } from '@angular/core';  // directive aahe -> tyala import kela
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// decorator
@NgModule({
  // declaration madhe saglya component chi nava lihayachi
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule
  ],
  providers: [],            // application kasa run karayacha tyachi goshta
  bootstrap: [AppComponent] // bootstrap -> from where to start -> AppComponent pasun chalu kr
})

export class AppModule { }
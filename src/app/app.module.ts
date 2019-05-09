import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoyfsComponent } from './boyfs/boyfs.component';
import { BoyfDetailComponent } from './boyf-detail/boyf-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BoyfsComponent,
    BoyfDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardModule, ButtonModule, DataLabelModule } from 'weather-lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    DataLabelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

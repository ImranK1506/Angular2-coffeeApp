import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms'; // NgModel

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // [(ngModel)]
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

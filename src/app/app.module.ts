import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms'; // NgModel

import { AppComponent } from './app.component';
import { BeverageDetailComponent } from './beverages/beverage-detail/beverage-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // [(ngModel)]
  ],
  declarations: [
    AppComponent,
    BeverageDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms'; // NgModel
import { RouterModule }            from '@angular/router';

import { AppComponent }            from './app.component';
import { BeverageDetailComponent } from './beverages/beverage-detail/beverage-detail.component';
import { BeveragesComponent }      from "./beverages/beverage/beverage.component";
import { BeverageService }         from './beverages/shared/beverage.service';
import { DashboardComponent }      from './beverages/dashboard/dashboard.component';

import { AppRoutingModule }        from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // [(ngModel)]
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BeverageDetailComponent,
    BeveragesComponent,
    DashboardComponent
  ],
  providers: [BeverageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
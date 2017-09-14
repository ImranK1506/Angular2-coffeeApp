import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms'; // NgModel
import { RouterModule }            from '@angular/router';
import { HttpModule }              from '@angular/http';

import { AppRoutingModule }        from './app-routing.module';

// // in-memory web api
import { InMemoryWebApiModule }    from 'angular-in-memory-web-api';
import { InMemoryDataService }     from './beverages/in-memory-data.service';

import { AppComponent }            from './app.component';
import { BeverageDetailComponent } from './beverages/beverage-detail/beverage-detail.component';
import { BeveragesComponent }      from './beverages/beverage/beverage.component';
import { BeverageService }         from './beverages/shared/beverage.service';
import { DashboardComponent }      from './beverages/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
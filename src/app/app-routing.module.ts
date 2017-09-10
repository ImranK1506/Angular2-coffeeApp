import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DashboardComponent }       from './beverages/dashboard/dashboard.component';
import { BeveragesComponent }       from './beverages/beverage/beverage.component';
import { BeverageDetailComponent }  from './beverages/beverage-detail/beverage-detail.component';

const routes: Routes = [
    {
     path: '',
     redirectTo: '/dashboard',
     pathMatch: 'full'
    },
    {        
     path: 'dashboard',
     component: DashboardComponent
    },
    {
     path: 'detail/:id',
     component: BeverageDetailComponent
    },
    {
     path: 'beverages',
     component: BeveragesComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
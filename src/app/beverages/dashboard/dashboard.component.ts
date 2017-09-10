import { Component, OnInit }        from '@angular/core';

import { Beverage }                 from '../beverage';
import { BeverageService }          from '../shared/beverage.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  beverages: Beverage[] = [];

  constructor(private BeverageService: BeverageService) { }

  ngOnInit(): void {
    this.BeverageService.getBeverages()
     .then(beverages => this.beverages = beverages.slice(0,4));
 }
}
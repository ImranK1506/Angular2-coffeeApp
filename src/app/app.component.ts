import { Component, OnInit } from '@angular/core';

import { Beverage }         from './beverages/beverage';
import { BeverageService }  from './beverages/shared/beverage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeverageService]
})
export class AppComponent implements OnInit {
  title = 'have a hot beverage';
  beverages: Beverage[];
  selectedBeverage: Beverage;

  constructor(private beverageService: BeverageService) { };

  getBeverages(): void {
    this.beverageService.getBeverages().then(beverages => this.beverages = beverages);
  }

  ngOnInit(): void {
    this.getBeverages();
  }

  onSelect(beverage: Beverage): void {
    this.selectedBeverage = beverage;
  }
}
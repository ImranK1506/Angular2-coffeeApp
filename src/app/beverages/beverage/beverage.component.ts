import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';


import { Beverage }           from '../beverage';
import { BeverageService }    from '../shared/beverage.service';

@Component({
  selector: 'my-beverages',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css'],
})
export class BeveragesComponent implements OnInit {
  beverages: Beverage[];
  selectedBeverage: Beverage;

  constructor( 
    private router: Router,
    private beverageService: BeverageService
  ) { };

  getBeverages(): void {
    this.beverageService.getBeverages()
      .then(beverages => this.beverages = beverages);
  }

  ngOnInit(): void {
    this.getBeverages();
  }

  onSelect(beverage: Beverage): void {
    this.selectedBeverage = beverage;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBeverage.id]);
  }
}
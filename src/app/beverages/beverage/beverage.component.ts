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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.beverageService.create(name)
        .then(beverage => {
            this.beverages.push(beverage);
            this.selectedBeverage = null;
        });
    }

  delete(beverage: Beverage): void {
    this.beverageService
        .delete(beverage.id)
        .then(() => {
          this.beverages = this.beverages.filter(b => b !== beverage);
          if (this.selectedBeverage === beverage) { this.selectedBeverage = null; }
        });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBeverage.id]);
  }
}
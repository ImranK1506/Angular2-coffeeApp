import { Component }    from '@angular/core';

import { Beverage }     from './beverage';

const BEVERAGES: Beverage[] = [
  { id: 11, name: 'Coffee: Americano' },
  { id: 12, name: 'Coffee: Cappucino' },
  { id: 13, name: 'Coffee: Caffé Latte' },
  { id: 14, name: 'Coffee: Espresso' },
  { id: 15, name: 'Coffee: Ristretto' },
  { id: 16, name: 'Tea: Earl grey' },
  { id: 17, name: 'Tea: Lemon' },
  { id: 18, name: 'Tea: Ginger' },
  { id: 19, name: 'Tea: Regular' },
  { id: 20, name: 'Tea: Green' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'have a hot beverage';
  beverages = BEVERAGES;
  selectedBeverage: Beverage;

  onSelect(beverage: Beverage): void {
    this.selectedBeverage = beverage;
  }
}
import { Component } from '@angular/core';

export class Beverage {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'have a hot beverage!';
  beverage: Beverage = {
    id: 1,
    name: 'Dark roast'
  };
}

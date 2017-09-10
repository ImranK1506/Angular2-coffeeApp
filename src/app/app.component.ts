import { Component }    from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `
        <h1>Welcome, {{title}}!</h1>
        <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/beverages">Beverages</a>
        </nav>
        <hr>
        <router-outlet></router-outlet>
        `
})
export class AppComponent {
  title = 'have a hot beverage';
}
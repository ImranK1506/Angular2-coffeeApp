import { Component }    from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `  
    <h1>Welcome, {{title}}!</h1>
        <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/beverages" routerLinkActive="active">Beverages</a>
        </nav>
        <hr>
        <router-outlet></router-outlet>
        `,
        styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'have a hot beverage';
}
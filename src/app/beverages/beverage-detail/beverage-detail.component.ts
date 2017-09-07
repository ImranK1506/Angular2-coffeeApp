import { Component, Input }    from '@angular/core';

import { Beverage }     from '../../beverage';

@Component({
    selector: 'beverage-detail',
    templateUrl: './beverage-detail.component.html'
})
export class BeverageDetailComponent {
    @Input() beverage: Beverage;
}
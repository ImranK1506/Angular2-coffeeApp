import { Injectable }       from '@angular/core';

import { Beverage }         from '../beverage';
import { BEVERAGES }        from '../mock-beverages';

@Injectable()
export class BeverageService {
    getBeverages(): Promise<Beverage[]> {
        return Promise.resolve(BEVERAGES);
    }
    
    getBeverage(id: number): Promise<Beverage> {
        return this.getBeverages()
                .then(beverages => beverages.find(beverage => beverage.id === id));
    }
}
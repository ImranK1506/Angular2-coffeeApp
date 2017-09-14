import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
        const beverages = [
            { id: 10, name: 'HotCoco' },
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
        return {beverages};
    }
}
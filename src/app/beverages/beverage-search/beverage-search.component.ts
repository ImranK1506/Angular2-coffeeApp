import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { Observable }               from 'rxjs/Observable';
import { Subject }                  from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { BeverageSearchService }    from './beverage-search.service';
import { Beverage }                 from '../beverage';

@Component({
    selector: 'beverage-search',
    templateUrl: './beverage-search.component.html',
    styleUrls: [ './beverage-search.component.css' ],
    providers: [BeverageSearchService]
})
export class BeverageSearchComponent implements OnInit {
    beverages: Observable<Beverage[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private beverageSearchService: BeverageSearchService,
        private router: Router) {}

    // push search term into observable stream
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.beverages = this.searchTerms
            .debounceTime(100)          // keystroke interval
            .distinctUntilChanged()     // ignore at same search term
            .switchMap(term => term     // switch to new observable at term change
            // return http search observable or if no search term
            ? this.beverageSearchService.search(term): Observable.of<Beverage[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Beverage[]>([]);
            });
         }

    gotoDetail(beverage: Beverage): void {
        let link = ['./detail', beverage.id];
        this.router.navigate(link);
    }
}
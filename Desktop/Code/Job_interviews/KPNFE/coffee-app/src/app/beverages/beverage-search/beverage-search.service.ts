import { Injectable }           from '@angular/core';
import { Http }                 from '@angular/http';

import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Beverage }             from '../beverage';

@Injectable()
export class BeverageSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Beverage[]> {
        return this.http
                .get(`api/beverages/?name=${term}`)
                .map(response => response.json().data as Beverage[]);
    }
}
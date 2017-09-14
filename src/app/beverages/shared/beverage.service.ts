import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Beverage }         from '../beverage';

@Injectable()
export class BeverageService {
    private beveragesUrl = 'api/beverages';     // URL to web api
    private headers = new Headers({'Content-type': 'application/json'});

    constructor(private http: Http) { }

    getBeverages(): Promise<Beverage[]> {
        return this.http.get(this.beveragesUrl)
            .toPromise()
            .then(response => response.json().data as Beverage[])
            .catch(this.handleError);
    }
    
    getBeverage(id: number): Promise<Beverage> {
        const url = `${this.beveragesUrl}/${id}`;
        return this.http.get(url)
             .toPromise()
             .then(response => response.json().data as Beverage)
             .catch(this.handleError);
    }

    create(name: string): Promise<Beverage> {
        return this.http
            .post(this.beveragesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Beverage)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.beveragesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(beverage: Beverage): Promise<Beverage> {
        const url = `${this.beveragesUrl}/${beverage.id}`;
        return this.http
            .put(url, JSON.stringify(beverage), {headers: this.headers})
            .toPromise()
            .then(() => beverage)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}
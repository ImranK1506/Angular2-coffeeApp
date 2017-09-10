import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit }    from '@angular/core';
import { ActivatedRoute, ParamMap }    from '@angular/router';
import { Location }                    from '@angular/common';

import { Beverage }                    from '../beverage';
import { BeverageService }             from '../shared/beverage.service';

@Component({
  selector: 'beverage-detail',
  templateUrl: './beverage-detail.component.html'
})
export class BeverageDetailComponent implements OnInit {
  @Input() beverage: Beverage;

  constructor(
        private beverageService:    BeverageService,
        private route:              ActivatedRoute,
        private location:           Location
    ) {}

  ngOnInit(): void {
    this.route.paramMap
     .switchMap((params: ParamMap) => this.beverageService.getBeverage(+params.get('id')))
     .subscribe(beverage => this.beverage = beverage);
 }
  goBack(): void {
      this.location.back();
  }
}
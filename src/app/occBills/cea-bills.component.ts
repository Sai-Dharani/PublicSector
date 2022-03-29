import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { ActiveCartService, CmsService, OrderEntry, Product } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { CurrentProductService } from '@spartacus/storefront';
import { DatePipe } from '@angular/common';
import { ceaBill } from './cea-bills.model';

@Component({
  selector: 'cea-bills',
  templateUrl: './cea-bills.component.html',
  styleUrls: ['./cea-bills.component.css']

})
export class CeaBillsComponent implements OnInit {

  orderEntries$: Observable<OrderEntry[]> = this.cartService.getEntries();
  product$: Observable<Product | null> = this.currentProductService.getProduct();

  constructor(
    private _freeApiService: freeApiService,
    private cartService: ActiveCartService,
    private cmsService: CmsService,
    private currentProductService: CurrentProductService,
    public datepipe: DatePipe,

  ) {

  }


  products!: ceaBill;

  trainingPlanResponse: any[] = [];

  ngOnInit() {
    this._freeApiService.getcomments()
      .subscribe
      (
        data => {
          this.products = data;
        }
      );



  }


}
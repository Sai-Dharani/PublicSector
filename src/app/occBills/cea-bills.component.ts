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
  pageOfItems: any[];
  products!: ceaBill;
  p: Number = 1;
  count: Number = 10;
  back;
  constructor(
    private _freeApiService: freeApiService,
    private cartService: ActiveCartService,
    private cmsService: CmsService,
    private currentProductService: CurrentProductService,
    public datepipe: DatePipe,

  ) {

  }
  ngOnInit() {

    this._freeApiService.getcomments()
      .subscribe
      (
        data => {
          this.products = data;
        }
      );
  }
  onBack() {
    this.back = window.history.back();
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }


}
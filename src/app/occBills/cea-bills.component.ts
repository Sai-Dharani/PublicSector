import { Component, OnInit } from '@angular/core';
import { ActiveCartService, CmsService, OrderEntry, Product } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { CurrentProductService } from '@spartacus/storefront';
import { DatePipe } from '@angular/common';
import { ceaBill } from './cea-bills.model';
import { occBillsService } from '../services/occBills.service';

@Component({
  selector: 'cea-bills',
  templateUrl: './cea-bills.component.html',
  styleUrls: ['./cea-bills.component.scss']

})
export class CeaBillsComponent implements OnInit {
  // 

  // 
  pageOfItems: any[];
  products!: ceaBill;
  pageNo: Number = 1;
  count: Number = 2;
  constructor(
    private _OccBillsService: occBillsService,
    public datepipe: DatePipe,

  ) {

  }
  ngOnInit() {

    this._OccBillsService.getcomments()
      .subscribe
      (
        data => {
          this.products = data;
        }
      );
  }
  onBack() {
    window.history.back();//redirect the current page to page's URL
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
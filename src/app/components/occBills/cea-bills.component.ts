import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ceaBill } from './cea-bills.model';
import { occBillsService } from '../services/occBills.service';
import * as myConstClass from './cea-contants';
@Component({
  selector: 'cea-bills',
  templateUrl: './cea-bills.component.html'
})
export class CeaBillsComponent implements OnInit {
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0,
  };
  page_label = myConstClass;

  products: ceaBill;
  constructor(
    private _OccBillsService: occBillsService,
    public datepipe: DatePipe,
    protected cdr: ChangeDetectorRef,

  ) { }

  ngOnInit() {
    this.fetchData();
  }
  onTableDataChange(event: number) {
    this.config.currentPage = event;
    this.fetchData();
  }
  fetchData() {
    this._OccBillsService.getBills(this.config.currentPage - 1).subscribe
      (
        data => {
          this.products = data;
          this.config.totalItems = this.products.pagination.totalResults;
          this.config.itemsPerPage = this.products.pagination.pageSize;
          //this is required to detect the new reponese(page) from server and display it
          this.cdr.detectChanges();
        }
      );;
  }
  filterData(value: string) {
    this._OccBillsService.setStatus(value);
    this.config.currentPage = 1;
    this.fetchData();
  }
  onBack() {
    //redirect the current page to page's URL
    window.history.back();
  }

}
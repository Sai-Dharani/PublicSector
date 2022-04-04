import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0,
  };

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  // 
  products: ceaBill;
  currentpage: number = 1;
  itemsperpage: number = 10;
  totalitems: number = 0;
  constructor(
    private _OccBillsService: occBillsService,
    public datepipe: DatePipe,
    protected cdr: ChangeDetectorRef

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
          this.cdr.detectChanges();//this is required to detect the new reponese(page) from server and display it
        }
      );;
  }
  filterData(value: string) {
    switch (value) {
      case "All":
        this._OccBillsService.getStatus(value);
        this.fetchData();
        break;
      case "Unpaid":
        this._OccBillsService.getStatus(value);
        this.fetchData();
        break;
      case "Paid":
        this._OccBillsService.getStatus(value);
        this.fetchData();
        break;
      default:
        console.log("bill status selected is invalid");
    }
  }
  onBack() {
    window.history.back();//redirect the current page to page's URL
  }

}
import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { ActiveCartService, CmsService, OrderEntry, Product } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { CurrentProductService } from '@spartacus/storefront';
import { DatePipe } from '@angular/common';



export interface Currency {
  active: boolean;
  isocode: string;
  name: string;
  symbol: string;
}

export interface Customer {
  name: string;
  uid: string;
}

export interface PaidBy {
  name: string;
  uid: string;
}

export interface Country {
  isocode: string;
  name: string;
}

export interface Region {
  countryIso: string;
  isocode: string;
  isocodeShort: string;
  name: string;
}

export interface BillingAddress {
  cellphone: string;
  companyName: string;
  country: Country;
  defaultAddress: boolean;
  district: string;
  email: string;
  firstName: string;
  formattedAddress: string;
  id: string;
  lastName: string;
  line1: string;
  line2: string;
  phone: string;
  postalCode: string;
  region: Region;
  shippingAddress: boolean;
  title: string;
  titleCode: string;
  town: string;
  visibleInAddressBook: boolean;
}

export interface CardType {
  code: string;
  name: string;
}

export interface PaymentInfo {
  accountHolderName: string;
  billingAddress: BillingAddress;
  cardNumber: string;
  cardType: CardType;
  defaultPayment: boolean;
  expiryMonth: string;
  expiryYear: string;
  id: string;
  issueNumber: string;
  saved: boolean;
  startMonth: string;
  startYear: string;
  subscriptionId: string;
}

export interface Transaction {
  outstandingAmount: number;
  overPaidAmount: number;
  paidAmount: number;
  paidAt: Date;
  paidBy: PaidBy;
  paymentInfo: PaymentInfo;
  receiptId: number;
  transactionId: string;
}

export interface Message {
  longMessage: string;
  messageCondition: string;
  shortMessage: string;
}

export interface Type {
  code: string;
  description: string;
  isOverPaymentAllowed: boolean;
  isOverduePaymentAllowed: boolean;
  isPartPaymentAllowed: boolean;
  isPaymentAllowed: boolean;
  messages: Message[];
  name: string;
}

export interface Bill {
  code: number;
  createdAt: Date;
  currency: Currency;
  customer: Customer;
  customerReferenceNumber: string;
  description: string;
  displayBillId: string;
  dueAt: Date;
  duration: number;
  email: string;
  isOverDue: boolean;
  lastName: string;
  outstandingAmount: number;
  overPaidAmount: number;
  paymentStatus: string;
  paymentType: string;
  totalAmount: number;
  transactions: Transaction[];
  type: Type;
  url: string;
}

export interface Pagination {
  currentPage: number;
  pageSize: number;
  sort: string;
  totalPages: number;
  totalResults: number;
}

export interface Sort {
  code: string;
  name: string;
  selected: boolean;
}

export interface RootObject {
  bills: Bill[];
  pagination: Pagination;
  sorts: Sort[];
}






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


  product!: Product;
  products!: RootObject;

  trainingPlanResponse: any[] = [];

  ngOnInit() {
    this._freeApiService.getcomments()
      .subscribe
      (
        data => {
          this.product = data;
          this.products = data;
          console.log(this.datepipe.transform(this.products.bills[0].dueAt, 'MMM dd,yyyy'));
          for (let i = 0; i < 20; i++) {
            console.log(i);
            console.log(this.products.pagination);

          }

          console.log(this.products.bills[0].type.description);

          this.product.code
          this.product$ = data;





        }
      );



  }


}
import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { ActiveCartService, CmsService, OrderEntry, Product} from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '@spartacus/storefront';

  

@Component({
  selector: 'cea-bills',
  templateUrl: './cea-bills.component.html'
})
export class CeaBillsComponent implements OnInit{
 
  orderEntries$: Observable<OrderEntry[]> = this.cartService.getEntries();
  product$: Observable<Product | null> = this.currentProductService.getProduct();
 
    constructor (
      private _freeApiService: freeApiService,
      private cartService: ActiveCartService,
      private cmsService: CmsService,
      private currentProductService: CurrentProductService,
      ){
     
      }

  
     product!: Product;
     trainingPlanResponse: any[] = [];

    ngOnInit() {
        this._freeApiService.getcomments()
        .subscribe
        (
          data=>
          {
            this.product = data;
          }
        );
        this.cmsService.getCurrentPage().subscribe(console.log);
        console.log('line 41');
    }

   
}
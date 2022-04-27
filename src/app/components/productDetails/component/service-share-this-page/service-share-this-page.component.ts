import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { RegisterServicesComponent } from '../../productDetails.Model';

@Component({
  selector: 'app-service-share-this-page',
  templateUrl: './service-share-this-page.component.html'
})
export class ServiceShareThisPageComponent implements OnInit {

  constructor(private component:CmsComponentData<RegisterServicesComponent>) { }

   data$ : Observable<RegisterServicesComponent> = this.component.data$


  constructor(private ProductDetailsService: ProductDetailsService) { }
  PDP: any;

  ngOnInit() {
    this.PDP = this.ProductDetailsService.getProductDetails();
  }

}

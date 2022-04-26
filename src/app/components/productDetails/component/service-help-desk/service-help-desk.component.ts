import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';

@Component({
  selector: 'app-service-help-desk',
  templateUrl: './service-help-desk.component.html',
})
export class ServiceHelpDeskComponent implements OnInit {
  // constructor(private component:CmsComponentData<RegisterServicesComponent>) { }

  //  data$ : Observable<RegisterServicesComponent> = this.component.data$
  constructor(private ProductDetailsService: ProductDetailsService) { }
  PDP: any;

  ngOnInit() {
    this.PDP = this.ProductDetailsService.getProductDetails();
  }



}

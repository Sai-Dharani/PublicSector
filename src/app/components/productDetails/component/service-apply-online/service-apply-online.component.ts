import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';

@Component({
  selector: 'app-service-apply-online',
  templateUrl: './service-apply-online.component.html'
})
export class ServiceApplyOnlineComponent implements OnInit {

  constructor(private ProductDetailsService:ProductDetailsService) { }
  PDP:any;

  ngOnInit() {
      this.PDP=this.ProductDetailsService.getProductDetails();
  }

  
}

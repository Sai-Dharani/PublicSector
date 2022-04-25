import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';

@Component({
  selector: 'app-service-apply-by-phone',
  templateUrl: './service-apply-by-phone.component.html',
})
export class ServiceApplyByPhoneComponent implements OnInit {
  PDP:any;
  constructor(private ProductDetailsService:ProductDetailsService) { }

  ngOnInit(){
    this.PDP=this.ProductDetailsService.getProductDetails();
  }
}

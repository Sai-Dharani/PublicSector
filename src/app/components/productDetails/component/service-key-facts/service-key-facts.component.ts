import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';

@Component({
  selector: 'app-service-key-facts',
  templateUrl: './service-key-facts.component.html'
})
export class ServiceKeyFactsComponent implements OnInit {
  PDP:any;
  constructor(private ProductDetailsService:ProductDetailsService) { }

  ngOnInit(){
    this.PDP=this.ProductDetailsService.getProductDetails();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';

@Component({
  selector: 'app-service-key-facts',
  templateUrl: './service-key-facts.component.html',
  styleUrls: ['./service-key-facts.component.scss']
})
export class ServiceKeyFactsComponent implements OnInit {
  @Input() 
  PDP:any;
  constructor(private ProductDetailsService:ProductDetailsService) { }

  ngOnInit(){
   // this.PDP=this.ProductDetailsService.getProductDetails();
  }

}

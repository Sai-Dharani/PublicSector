import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';

@Component({
  selector: 'app-service-related-links',
  templateUrl: './service-related-links.component.html',
  styleUrls: ['./service-related-links.component.scss']
})
export class ServiceRelatedLinksComponent implements OnInit {
  @Input() 
  PDP:any;
  constructor(private ProductDetailsService:ProductDetailsService) { }

  ngOnInit(){
   // this.PDP=this.ProductDetailsService.getProductDetails();
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';

@Component({
  selector: 'app-service-apply-online',
  templateUrl: './service-apply-online.component.html',
  styleUrls: ['./service-apply-online.component.scss']
})
export class ServiceApplyOnlineComponent implements OnInit {

  constructor(private ProductDetailsService:ProductDetailsService) { }
  // @Input() 
  PDP:any;

  ngOnInit() {
      this.PDP=this.ProductDetailsService.getProductDetails();
    // console.log(JSON.stringify(this.PDP))
  }

  
}

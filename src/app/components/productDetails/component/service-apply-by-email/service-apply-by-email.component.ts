import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';

@Component({
  selector: 'app-service-apply-by-email',
  templateUrl: './service-apply-by-email.component.html',
  styleUrls: ['./service-apply-by-email.component.scss']
})
export class ServiceApplyByEmailComponent implements OnInit {
  // @Input() 
  PDP:any;
  constructor(private ProductDetailsService:ProductDetailsService) { }

  ngOnInit(){
    this.PDP=this.ProductDetailsService.getProductDetails();
  }

}

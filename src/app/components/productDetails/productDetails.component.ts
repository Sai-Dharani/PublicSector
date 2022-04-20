import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductDetailsService } from '../services/productDetails.service';

@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.scss']
})
export class productDetailsComponent implements OnInit {
pdp : any;
  constructor(private ProductDetailsService:ProductDetailsService) { }

  ngOnInit(){
    console.log(this.pdp)
    this.pdp = this.ProductDetailsService.getProductDetails()
  }
}

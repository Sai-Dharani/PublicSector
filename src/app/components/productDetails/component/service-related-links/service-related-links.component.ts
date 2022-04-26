import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-service-related-links',
  templateUrl: './service-related-links.component.html'
})
export class ServiceRelatedLinksComponent implements OnInit {
  PDP:any;
  constructor(private ProductDetailsService:ProductDetailsService, protected cdr: ChangeDetectorRef) { }

  ngOnInit(){
    this.PDP=this.ProductDetailsService.getProductDetails();
    this.cdr.detectChanges();
  }


}

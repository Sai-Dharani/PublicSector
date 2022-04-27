import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailsService } from 'src/app/components/services/productDetails.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-service-apply-online',
  templateUrl: './service-apply-online.component.html'
})
export class ServiceApplyOnlineComponent implements OnInit {

  constructor(private ProductDetailsService: ProductDetailsService, private route: Router, protected cdr: ChangeDetectorRef,) { }
  PDP: any;

  ngOnInit() {
    let currentUrl = this.route.url;
    // console.log(currentUrl)
    // this.route.navigateByUrl(currentUrl)
    this.PDP = this.ProductDetailsService.getProductDetails();
    this.cdr.detectChanges();
  }


}
